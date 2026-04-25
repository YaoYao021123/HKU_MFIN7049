(function () {
  function normalizeMath(input) {
    return input
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<")
      .replace(/>=/g, "\\ge ")
      .replace(/<=/g, "\\le ")
      .replace(/->/g, "\\to ")
      .replace(/≈/g, "\\approx ")
      .replace(/≤/g, "\\le ")
      .replace(/≥/g, "\\ge ")
      .replace(/→/g, "\\to ")
      .replace(/×/g, "\\times ")
      .replace(/·/g, "\\cdot ")
      .replace(/\s\*\s/g, " \\cdot ")
      .replace(/−/g, "-")
      .replace(/²/g, "^2")
      .replace(/³/g, "^3")
      .replace(/\bRf\b/g, "R_f")
      .replace(/\bPV\b/g, "PV")
      .replace(/\bNPV\b/g, "NPV")
      .replace(/\bIRR\b/g, "IRR")
      .replace(/\bCE\b/g, "CE")
      .replace(/\bIC\b/g, "IC")
      .replace(/\balpha\b/g, "\\alpha")
      .replace(/\bbeta\b/g, "\\beta")
      .replace(/\btheta\b/g, "\\theta")
      .replace(/\bsigma\b/g, "\\sigma")
      .replace(/\bmu\b/g, "\\mu")
      .replace(/([A-Za-zΑ-Ωα-ω])~/g, "\\tilde{$1}")
      .replace(/\bmin\(/g, "\\min(")
      .replace(/\bmax\(/g, "\\max(")
      .replace(/\bexp\(/g, "\\exp(");
  }

  function splitLabelAndFormula(line) {
    const eqIndex = line.indexOf("=");
    if (eqIndex === -1) return null;
    const left = line.slice(0, eqIndex).trim();
    const right = line.slice(eqIndex + 1).trim();
    if (!left || !right) return null;
    if (!/\s/.test(left)) return null;
    if (/[0-9μσβθαηΔ~<>≤≥()+\-/*]/.test(left)) return null;
    return { label: left, formula: right };
  }

  function looksLikeInlineMath(text) {
    if (!text) return false;
    if (/[.]pdf$/i.test(text)) return false;
    if (/^[A-Za-z][A-Za-z0-9 .:/-]{0,30}$/.test(text) && !/[=<>≤≥≈~μσβθαηΔ×·()]/.test(text)) {
      return false;
    }
    return /[=<>≤≥≈~μσβθαηΔ×·()]/.test(text) ||
      /\b(E|Rf|PV|NPV|IRR|CE|IC)\b/.test(text) ||
      /[0-9].*[A-Za-zΑ-Ωα-ω]/.test(text) ||
      /[A-Za-zΑ-Ωα-ω].*[0-9]/.test(text);
  }

  function looksLikeBlockMathLine(line) {
    const trimmed = line.trim();
    if (!trimmed) return false;
    if (/^[0-9]+\./.test(trimmed)) return false;
    if (/^[A-Za-z][A-Za-z ]+:$/.test(trimmed)) return false;
    return /[=<>≤≥≈~μσβθαηΔ×·]/.test(trimmed) ||
      /\b(E|Rf|PV|NPV|IRR|CE|IC|Cov|Var)\b/.test(trimmed) ||
      /^[(]?[A-Za-zΑ-Ωα-ω0-9].*[()+\-/*].*/.test(trimmed);
  }

  function renderInlineCode() {
    document.querySelectorAll("code:not(pre code)").forEach((node) => {
      const text = node.textContent.trim();
      if (!looksLikeInlineMath(text)) return;
      const span = document.createElement("span");
      span.className = "math-inline";
      try {
        katex.render(normalizeMath(text), span, {
          throwOnError: false,
          displayMode: false
        });
        node.replaceWith(span);
      } catch (error) {
        span.classList.add("math-render-error");
        span.textContent = text;
        node.replaceWith(span);
      }
    });
  }

  function renderBlockCode() {
    document.querySelectorAll("pre code").forEach((codeNode) => {
      const lines = codeNode.textContent.split("\n");
      const mathLines = lines.filter(looksLikeBlockMathLine);
      if (mathLines.length === 0) return;

      const container = document.createElement("div");
      container.className = "math-display";

      lines.forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed) return;
        const row = document.createElement("div");

        if (looksLikeBlockMathLine(trimmed)) {
          const pair = splitLabelAndFormula(trimmed);

          if (pair) {
            row.className = "math-display-line math-display-pair";
            const label = document.createElement("div");
            label.className = "math-display-pair-label";
            label.textContent = pair.label;

            const formula = document.createElement("div");
            formula.className = "math-display-pair-formula";
            try {
              katex.render(normalizeMath(pair.formula), formula, {
                throwOnError: false,
                displayMode: true
              });
            } catch (error) {
              formula.className = "math-display-pair-formula math-render-error";
              formula.textContent = pair.formula;
            }

            row.appendChild(label);
            row.appendChild(formula);
          } else {
            row.className = "math-display-line";
            try {
              katex.render(normalizeMath(trimmed), row, {
                throwOnError: false,
                displayMode: true
              });
            } catch (error) {
              row.className = "math-display-line math-render-error";
              row.textContent = trimmed;
            }
          }
        } else {
          row.className = "math-display-label";
          row.textContent = trimmed;
        }

        container.appendChild(row);
      });

      codeNode.parentElement.replaceWith(container);
    });
  }

  function initKaTeXAuto() {
    if (typeof window.katex === "undefined") return;
    renderInlineCode();
    renderBlockCode();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initKaTeXAuto);
  } else {
    initKaTeXAuto();
  }
})();
