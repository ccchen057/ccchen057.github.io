/* @ds-bundle: {"format":3,"namespace":"ChenChunChenDesignSystem_21873a","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a89ae2e0097a","components/core/Button.jsx":"0172e70bf33b","components/core/Card.jsx":"48ea9d21d372","components/core/Input.jsx":"0a974d23357c","components/core/SectionLabel.jsx":"86ba317b9429","components/core/TextLink.jsx":"4a8232fac676","ui_kits/personal-site/About.jsx":"ab0f4b5c8f81","ui_kits/personal-site/CV.jsx":"feb9d2f91cd5","ui_kits/personal-site/Contact.jsx":"077a8e80ea26","ui_kits/personal-site/Hero.jsx":"2605daa47b66","ui_kits/personal-site/Publications.jsx":"16d4ef8bff88","ui_kits/personal-site/SiteNav.jsx":"4ebf3b96728a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChenChunChenDesignSystem_21873a = window.ChenChunChenDesignSystem_21873a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small status/category marker.
 * Two tones: 'outline' (default, hairline) and 'solid' (ink fill).
 * Uppercase serif label voice.
 */
function Badge({
  children,
  tone = 'outline',
  size = 'md',
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '10px',
      padding: '3px 8px',
      letterSpacing: '0.14em'
    },
    md: {
      fontSize: '11px',
      padding: '4px 10px',
      letterSpacing: '0.16em'
    }
  };
  const tones = {
    outline: {
      background: 'transparent',
      color: 'var(--color-text-secondary)',
      border: '1px solid var(--color-border)'
    },
    solid: {
      background: 'var(--color-accent)',
      color: 'var(--color-accent-text)',
      border: '1px solid var(--color-accent)'
    },
    muted: {
      background: 'var(--color-surface-sunken)',
      color: 'var(--color-text-muted)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-label)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...tones[tone]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the system's primary action control.
 * All-serif label, pill by default. Monochrome ink fills;
 * emphasis comes from fill vs. outline, not color.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 'var(--text-sm)',
      padding: '7px 16px',
      gap: '7px'
    },
    md: {
      fontSize: 'var(--text-base)',
      padding: '10px 22px',
      gap: '8px'
    },
    lg: {
      fontSize: 'var(--text-md)',
      padding: '13px 28px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-accent)',
      color: 'var(--color-accent-text)',
      border: '1px solid var(--color-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-text)',
      border: '1px solid var(--color-border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text)',
      border: '1px solid transparent'
    }
  };
  const style = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    fontSize: sizes[size].fontSize,
    lineHeight: 1,
    letterSpacing: '0.01em',
    padding: sizes[size].padding,
    borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
    ...variants[variant]
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--color-accent-hover)';else e.currentTarget.style.background = 'var(--color-hover-wash)';
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: onEnter,
    onMouseLeave: e => {
      onLeave(e);
      onUp(e);
    },
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a surface container. Editorial-first: defaults to a
 * hairline border with no shadow. Set elevated for a soft shadow,
 * or interactive for a hover lift (use when the whole card is a link).
 */
function Card({
  children,
  elevated = false,
  interactive = false,
  padding = 'md',
  as = 'div',
  ...rest
}) {
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    padding: pads[padding],
    boxShadow: elevated ? 'var(--shadow-md)' : 'none',
    transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out)',
    cursor: interactive ? 'pointer' : 'default',
    ...(interactive && hover ? {
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-lg)',
      borderColor: 'var(--color-border-strong)'
    } : {})
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field with a bottom-rule (editorial)
 * or boxed variant. Optional label and hint, all in the serif voice.
 */
function Input({
  label,
  hint,
  variant = 'line',
  type = 'text',
  invalid = false,
  id,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [focused, setFocused] = React.useState(false);
  const base = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    color: 'var(--color-text)',
    background: variant === 'box' ? 'var(--color-surface)' : 'transparent',
    outline: 'none',
    transition: 'border-color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)'
  };
  const variants = {
    line: {
      border: 'none',
      borderBottom: `1.5px solid ${invalid ? 'var(--color-critical)' : focused ? 'var(--color-border-strong)' : 'var(--color-border)'}`,
      borderRadius: 0,
      padding: '8px 2px'
    },
    box: {
      border: `1px solid ${invalid ? 'var(--color-critical)' : focused ? 'var(--color-border-strong)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    style: {
      ...base,
      ...variants[variant]
    },
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: invalid ? 'var(--color-critical)' : 'var(--color-text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — the uppercase serif eyebrow used to title sections.
 * Optional index number (e.g. "01") and a trailing hairline rule.
 */
function SectionLabel({
  children,
  index = null,
  rule = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      width: '100%'
    }
  }, rest), index !== null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.1em',
      color: 'var(--color-text-faint)'
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)',
      whiteSpace: 'nowrap'
    }
  }, children), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--color-border)'
    }
  }));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextLink — an inline or standalone link with an animated
 * underline. 'arrow' variant adds a trailing → that nudges on hover.
 */
function TextLink({
  children,
  href = '#',
  variant = 'underline',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  if (variant === 'arrow') {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        color: 'var(--color-text)',
        textDecoration: 'none',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)'
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        backgroundImage: 'linear-gradient(currentColor, currentColor)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 100%',
        backgroundSize: hover ? '100% 1px' : '0% 1px',
        transition: 'background-size var(--duration-base) var(--ease-out)',
        paddingBottom: '2px'
      }
    }, children), /*#__PURE__*/React.createElement("span", {
      style: {
        transition: 'transform var(--duration-base) var(--ease-out)',
        transform: hover ? 'translateX(4px)' : 'translateX(0)'
      }
    }, "\u2192"));
  }
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: 'var(--color-link)',
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      backgroundImage: 'linear-gradient(currentColor, currentColor)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0 100%',
      backgroundSize: hover ? '100% 1px' : '100% 1px',
      boxShadow: 'inset 0 0 0 transparent',
      paddingBottom: '1px',
      transition: 'opacity var(--duration-fast) var(--ease-out)',
      opacity: hover ? 0.6 : 1
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/About.jsx
try { (() => {
/* About — bio with a numbered section label, prose, and a focus list. */
function About() {
  const {
    SectionLabel,
    Badge
  } = window.ChenChunChenDesignSystem_21873a;
  const focus = [['Parallel runtimes', 'Lightweight task systems and work-stealing schedulers for many-core and GPU nodes.'], ['Scheduling', 'Locality- and contention-aware policies that keep large clusters busy without starving jobs.'], ['Performance modeling', 'Analytical and learned models that predict where a workload will bottleneck — and why.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01",
    rule: true
  }, "About"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: '64px',
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      marginBottom: '24px',
      lineHeight: 1.1
    }
  }, "I work on the systems software underneath large-scale computation."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--color-text-secondary)',
      maxWidth: '54ch',
      marginBottom: '18px'
    }
  }, "I'm a PhD researcher in computer science focused on high-performance computing. My work sits between the application and the machine: the runtimes, schedulers, and performance models that decide how efficiently a scientific workload actually runs on a supercomputer."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-secondary)',
      maxWidth: '54ch'
    }
  }, "I care about results that hold up at scale \u2014 measured on real hardware, reproducible, and honest about where the gains come from. When I'm not profiling, I'm usually writing about what the numbers mean."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Open to collaboration"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Reviewing for SC '26"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '22px'
    }
  }, focus.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: '1px solid var(--color-border)',
      paddingTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)',
      marginBottom: '8px'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.5
    }
  }, d))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/CV.jsx
try { (() => {
/* CV — résumé view: experience, education, skills, talks. Sample content. */
function CV() {
  const {
    SectionLabel,
    Button,
    Badge
  } = window.ChenChunChenDesignSystem_21873a;
  const Entry = ({
    when,
    title,
    org,
    note
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '130px 1fr',
      gap: '24px',
      padding: '18px 0',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--color-text-muted)',
      paddingTop: '3px'
    }
  }, when), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-secondary)',
      marginTop: '3px'
    }
  }, org), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-muted)',
      marginTop: '8px',
      maxWidth: '60ch',
      lineHeight: 1.5
    }
  }, note)));
  const skills = ['C / C++', 'CUDA', 'MPI', 'OpenMP', 'Rust', 'Python', 'LLVM', 'SLURM', 'Roofline analysis', 'Performance profiling'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "03",
    rule: true
  }, "Curriculum Vitae"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2193")
  }, "PDF")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: '56px',
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-text-faint)',
      marginBottom: '8px'
    }
  }, "Experience"), /*#__PURE__*/React.createElement(Entry, {
    when: "2022 \u2014 now",
    title: "Graduate Research Assistant",
    org: "Systems & HPC Lab, Dept. of Computer Science",
    note: "Runtimes and schedulers for large-scale scientific computing; lead author on three peer-reviewed papers."
  }), /*#__PURE__*/React.createElement(Entry, {
    when: "Summer 2024",
    title: "Research Intern",
    org: "National Laboratory \xB7 Performance Engineering",
    note: "Profiled and tuned a production climate code; cut a key kernel's runtime by a meaningful margin on GPU partitions."
  }), /*#__PURE__*/React.createElement(Entry, {
    when: "2021 \u2014 2022",
    title: "Teaching Assistant",
    org: "Parallel & Distributed Computing"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-text-faint)',
      margin: '34px 0 8px'
    }
  }, "Education"), /*#__PURE__*/React.createElement(Entry, {
    when: "2022 \u2014 now",
    title: "PhD, Computer Science",
    org: "High-Performance Computing"
  }), /*#__PURE__*/React.createElement(Entry, {
    when: "2018 \u2014 2022",
    title: "BSc, Computer Science",
    org: "With distinction"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-text-faint)',
      marginBottom: '14px'
    }
  }, "Skills"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '34px'
    }
  }, skills.map(s => /*#__PURE__*/React.createElement(Badge, {
    key: s,
    tone: "outline"
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-text-faint)',
      marginBottom: '14px'
    }
  }, "Selected Talks"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 500
    }
  }, "Scheduling at exascale"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-muted)'
    }
  }, "SC '25 \xB7 Technical Session")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 500
    }
  }, "Runtimes for irregular workloads"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-muted)'
    }
  }, "PPoPP '25 \xB7 Lightning Talk"))))));
}
window.CV = CV;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/CV.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/Contact.jsx
try { (() => {
/* Contact — short pitch + working form (fake submit) + direct links. */
function Contact() {
  const {
    SectionLabel,
    Button,
    Input,
    TextLink
  } = window.ChenChunChenDesignSystem_21873a;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "04",
    rule: true
  }, "Keep in Touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      lineHeight: 1.05,
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '-0.03em'
    }
  }, "Let's talk", /*#__PURE__*/React.createElement("br", null), "systems."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--color-text-secondary)',
      maxWidth: '46ch',
      marginBottom: '30px'
    }
  }, "Open to research collaborations, internships, and conversations about runtimes, scheduling, and making scientific code faster."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, [['Email', 'cc.chen@lab.edu'], ['Scholar', 'View profile →'], ['GitHub', '@ccchen →']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--color-text-faint)',
      width: '70px'
    }
  }, k), /*#__PURE__*/React.createElement(TextLink, {
    href: "#"
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--color-border)',
      paddingLeft: '48px'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--color-positive)',
      marginBottom: '10px'
    }
  }, "Message sent"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)'
    }
  }, "Thanks \u2014 I'll get back to you soon."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setSent(false)
  }, "Send another"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '22px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@institution.edu",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    placeholder: "What would you like to talk about?",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    fullWidth: true
  }, "Send message"))))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/Hero.jsx
try { (() => {
/* Hero — kinetic all-caps headline + rule device + meta + CTAs.
   Composes Button from the bundle. */
function Hero({
  onNavigate
}) {
  const {
    Button
  } = window.ChenChunChenDesignSystem_21873a;
  const [key, setKey] = React.useState(0);
  // replay entrance whenever Hero mounts
  React.useEffect(() => {
    setKey(k => k + 1);
  }, []);
  const lines = [{
    t: 'I build',
    cls: 'h-sm',
    d: '0.05s'
  }, {
    t: 'Systems',
    cls: 'h-xl',
    d: '0.13s'
  }, {
    t: 'that make science',
    cls: 'h-md',
    d: '0.21s'
  }];
  return /*#__PURE__*/React.createElement("section", {
    key: key,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        .hero-ln { overflow: hidden; line-height: 0.9; font-family: var(--font-display); text-transform: uppercase; letter-spacing: -0.04em; }
        .hero-ln > span { display: inline-block; transform: translateY(0); }
        .h-sm { font-size: var(--text-2xl); font-weight: 700; }
        .h-md { font-size: var(--text-xl); font-weight: 600; letter-spacing: 0.01em; }
        .h-xl { font-size: clamp(64px, 9vw, 116px); font-weight: 800; }
        .hero-last { display: flex; align-items: center; gap: 28px; }
        .hero-bar { width: 150px; height: 16px; background: var(--color-text); transform: scaleX(1); transform-origin: left; }
        @media (prefers-reduced-motion: no-preference) {
          .hero-ln > span { animation: heroRise 0.8s var(--ease-out) both; }
          .hero-bar { animation: heroGrow 0.7s var(--ease-out) 0.4s both; }
        }
        @keyframes heroRise { from { transform: translateY(110%); } to { transform: translateY(0); } }
        @keyframes heroGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `hero-ln ${l.cls}`
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      animationDelay: l.d
    }
  }, l.t))), /*#__PURE__*/React.createElement("div", {
    className: "hero-ln h-xl hero-last"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-bar",
    style: {
      animationDelay: '0.4s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      animationDelay: '0.29s'
    }
  }, "run faster."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginTop: '56px',
      flexWrap: 'wrap',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)'
    }
  }, "PhD \xB7 High-Performance Computing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate('Publications')
  }, "View publications"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate('CV')
  }, "Download CV"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/Publications.jsx
try { (() => {
/* Publications — filterable list of papers as index rows. Sample content. */
function Publications() {
  const {
    SectionLabel,
    Badge,
    TextLink
  } = window.ChenChunChenDesignSystem_21873a;
  const [filter, setFilter] = React.useState('All');
  const papers = [{
    y: '2025',
    v: 'SC',
    t: 'Locality-aware work stealing for exascale task graphs',
    a: 'C.-C. Chen, et al.',
    type: 'Conference',
    tag: 'Best Paper Nominee'
  }, {
    y: '2025',
    v: 'PPoPP',
    t: 'A lightweight runtime for irregular GPU workloads',
    a: 'C.-C. Chen, A. Researcher',
    type: 'Conference',
    tag: null
  }, {
    y: '2024',
    v: 'IPDPS',
    t: 'Predicting memory-bandwidth bottlenecks with learned roofline models',
    a: 'C.-C. Chen, et al.',
    type: 'Conference',
    tag: null
  }, {
    y: '2024',
    v: 'TPDS',
    t: 'Contention-aware scheduling across heterogeneous nodes',
    a: 'C.-C. Chen, B. Advisor',
    type: 'Journal',
    tag: null
  }, {
    y: '2023',
    v: 'arXiv',
    t: 'On the limits of static partitioning for dynamic meshes',
    a: 'C.-C. Chen',
    type: 'Preprint',
    tag: 'Preprint'
  }];
  const types = ['All', 'Conference', 'Journal', 'Preprint'];
  const shown = papers.filter(p => filter === 'All' || p.type === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "02",
    rule: true
  }, "Selected Publications"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      margin: '28px 0 8px'
    }
  }, types.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setFilter(t),
    style: {
      background: filter === t ? 'var(--color-accent)' : 'transparent',
      color: filter === t ? 'var(--color-accent-text)' : 'var(--color-text-secondary)',
      border: '1px solid ' + (filter === t ? 'var(--color-accent)' : 'var(--color-border)'),
      borderRadius: 'var(--radius-pill)',
      padding: '6px 15px',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      transition: 'all var(--duration-fast) var(--ease-out)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", null, shown.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '92px 1fr auto',
      gap: '28px',
      alignItems: 'baseline',
      padding: '22px 4px',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--color-text-muted)'
    }
  }, p.y, " \xB7 ", p.v), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      lineHeight: 1.25,
      marginBottom: '6px'
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-muted)'
    }
  }, p.a), p.tag && /*#__PURE__*/React.createElement(Badge, {
    tone: "muted",
    size: "sm"
  }, p.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    href: "#"
  }, "PDF"), /*#__PURE__*/React.createElement(TextLink, {
    href: "#"
  }, "DOI"))))));
}
window.Publications = Publications;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/Publications.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/SiteNav.jsx
try { (() => {
/* SiteNav — top navigation: monogram mark, section links, theme toggle.
   Composes nothing from the bundle (it IS chrome); uses tokens directly. */
function SiteNav({
  current,
  onNavigate,
  theme,
  onToggleTheme
}) {
  const items = ['Home', 'About', 'Publications', 'CV', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 0',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('Home'),
    "aria-label": "Home",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      border: '1.5px solid var(--color-text)',
      background: 'transparent',
      color: 'var(--color-text)',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: '15px',
      letterSpacing: '0.02em'
    }
  }, "CC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '34px'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '30px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    onClick: () => onNavigate(it),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '2px 0',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      fontWeight: 500,
      color: 'var(--color-text)',
      opacity: current === it ? 1 : 0.5,
      borderBottom: current === it ? '2px solid var(--color-text)' : '2px solid transparent',
      transition: 'opacity var(--duration-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      if (current !== it) e.currentTarget.style.opacity = 0.85;
    },
    onMouseLeave: e => {
      if (current !== it) e.currentTarget.style.opacity = 0.5;
    }
  }, it))), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      background: 'none',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 13px',
      cursor: 'pointer',
      color: 'var(--color-text-secondary)',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, theme === 'dark' ? 'Light' : 'Dark')));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/SiteNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.TextLink = __ds_scope.TextLink;

})();
