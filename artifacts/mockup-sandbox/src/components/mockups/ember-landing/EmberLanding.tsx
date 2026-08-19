import { useState, type FormEvent } from "react";

const emberImage = "/__mockup/images/ember-brand-identity.png";

function EmberMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`ember-mark ${small ? "ember-mark--small" : ""}`} aria-hidden="true">
      <span className="ember-mark__crop">
        <img src={emberImage} alt="" />
      </span>
      <span className="ember-mark__ring ember-mark__ring--outer" />
      <span className="ember-mark__ring ember-mark__ring--middle" />
      <span className="ember-mark__ring ember-mark__ring--inner" />
      <span className="ember-mark__core" />
    </span>
  );
}

function Arrow({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`arrow-icon ${dark ? "arrow-icon--dark" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 20 20" fill="none">
        <path d="M3 10h13M10.5 4.5 16 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function CaptureForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className={`capture-success ${compact ? "capture-success--compact" : ""}`}>
        <span className="success-dot" />
        <div>
          <strong>Your seven-day look is on its way.</strong>
          <p>We will reply by email with the simple next step.</p>
        </div>
      </div>
    );
  }

  return (
    <form className={`capture-form ${compact ? "capture-form--compact" : ""}`} onSubmit={handleSubmit}>
      <div className="capture-fields">
        <label>
          <span>Your email</span>
          <input type="email" name="email" placeholder="you@yourcommunity.com" required />
        </label>
        <label>
          <span>Skool community URL</span>
          <input type="url" name="community" placeholder="www.skool.com/your-community" required />
        </label>
      </div>
      <button type="submit" className="ember-button">
        Get the report <Arrow />
      </button>
      <p className="capture-note">No call to book. No software to learn. Just a useful first look.</p>
    </form>
  );
}

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>{children}</p>;
}

function Leaderboard() {
  const members = [
    { rank: "01", initials: "MO", name: "Maya Okafor", points: "2,840", active: "Today", status: "live" },
    { rank: "02", initials: "TR", name: "Theo Raines", points: "2,630", active: "Yesterday", status: "live" },
    { rank: "03", initials: "JS", name: "Jonah Singh", points: "2,410", active: "11 days ago", status: "quiet" },
    { rank: "04", initials: "AE", name: "Ari Ellis", points: "2,180", active: "Today", status: "live" },
  ];

  return (
    <div className="leaderboard-wrap">
      <div className="leaderboard-note">
        <span className="note-line" />
        <span>Still near the top.<br />Quietly gone.</span>
      </div>
      <div className="leaderboard">
        <div className="leaderboard-head">
          <span>Founders Circle</span>
          <span className="skool-chip"><i /> Skool community</span>
        </div>
        <div className="leaderboard-title">
          <div>
            <span className="tiny-label">This week</span>
            <strong>Leaderboard</strong>
          </div>
          <span className="leaderboard-dots">•••</span>
        </div>
        <div className="leaderboard-tabs"><span className="tab-active">All time</span><span>This week</span><span>Today</span></div>
        <div className="leaderboard-rows">
          {members.map((member) => (
            <div className={`member-row ${member.status === "quiet" ? "member-row--quiet" : ""}`} key={member.rank}>
              <span className="member-rank">{member.rank}</span>
              <span className="member-avatar">{member.initials}</span>
              <span className="member-name">{member.name}</span>
              <span className="member-points">{member.points}<small> pts</small></span>
              <span className={`member-active ${member.status === "quiet" ? "member-active--quiet" : ""}`}>
                <i /> {member.active}
              </span>
            </div>
          ))}
        </div>
        <div className="leaderboard-foot"><span>28 members</span><span>View full leaderboard <Arrow dark /></span></div>
      </div>
    </div>
  );
}

function ReportSheet() {
  return (
    <div className="report-sheet">
      <div className="report-sheet__top">
        <span className="report-stamp">EMBER / 07</span>
        <span className="report-date">A short field note · 14 May 2024</span>
      </div>
      <div className="report-sheet__title">
        <span>The</span>
        <strong>Ghost Member<br />Report</strong>
      </div>
      <div className="report-sheet__rule" />
      <div className="report-member">
        <span className="member-avatar member-avatar--large">JS</span>
        <div><strong>Jonah Singh</strong><span>Ranked 3rd · 2,410 points</span></div>
        <span className="report-alert">Worth a note</span>
      </div>
      <div className="report-copy">
        <p>Jonah is still highly ranked, but his last visit was 11 days ago. He posted often in April and replied to Maya twice in the wins thread.</p>
        <p className="report-highlight">A personal check-in about his April progress would feel natural here.</p>
      </div>
      <div className="report-sheet__footer"><span>Prepared by Ember</span><span>01 / 03</span></div>
      <span className="report-pencil">look closer</span>
    </div>
  );
}

function EmberLandingStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Kalam:wght@400;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
      :root { --ember-ink: #171615; --ember-paper: #f3ede4; --ember-paper-deep: #e8ddcf; --ember-orange: #f47730; --ember-gold: #e6a83d; --ember-muted: #948b80; --ember-line: rgba(243, 237, 228, .16); }
      .ember-page { background: var(--ember-ink); color: var(--ember-paper); font-family: 'DM Sans', sans-serif; min-height: 100dvh; overflow: hidden; }
      .ember-page *, .ember-page *::before, .ember-page *::after { box-sizing: border-box; }
      .ember-page::before { content: ""; position: fixed; inset: 0; z-index: 50; pointer-events: none; opacity: .045; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E"); }
      .ember-shell { width: min(1180px, calc(100% - 64px)); margin: 0 auto; }
      .ember-topbar { height: 84px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--ember-line); position: relative; z-index: 3; }
      .ember-wordmark { display: inline-flex; align-items: center; gap: 12px; color: var(--ember-paper); text-decoration: none; font-family: 'Space Grotesk', sans-serif; font-size: 19px; font-weight: 600; letter-spacing: -.04em; }
      .top-cta { color: var(--ember-paper); text-decoration: none; display: inline-flex; gap: 8px; align-items: center; font-size: 13px; border-bottom: 1px solid var(--ember-orange); padding: 5px 0 6px; transition: color .25s ease, border-color .25s ease; }
      .top-cta:hover { color: var(--ember-orange); border-color: var(--ember-paper); }
      .ember-mark { width: 34px; height: 38px; position: relative; display: inline-block; filter: drop-shadow(0 0 11px rgba(244,119,48,.2)); }
      .ember-mark--small { transform: scale(.68); transform-origin: left center; width: 24px; margin-right: -4px; }
      .ember-mark__ring { position: absolute; inset: 0; clip-path: polygon(50% 0, 94% 25%, 94% 75%, 50% 100%, 6% 75%, 6% 25%); transform: rotate(30deg); }
      .ember-mark__ring--outer { background: #725126; inset: 1px; }
      .ember-mark__ring--middle { background: var(--ember-gold); inset: 6px; }
      .ember-mark__ring--inner { background: #f58d2d; inset: 11px; }
      .ember-mark__core { position: absolute; width: 10px; height: 10px; left: 12px; top: 14px; border-radius: 50%; background: #ffcf65; box-shadow: 0 0 14px 5px rgba(255,160,49,.7); }
      .ember-mark__crop { position: absolute; inset: 0; z-index: 4; opacity: 0; overflow: hidden; border-radius: 50%; }
      .ember-mark__crop img { position: absolute; width: 540px; max-width: none; left: -253px; top: -15px; }
      .ember-hero { position: relative; padding: 108px 0 122px; }
      .ember-hero::after { content: ""; position: absolute; width: 590px; height: 590px; right: -230px; top: -90px; background: radial-gradient(circle, rgba(244,119,48,.22) 0%, rgba(207,113,35,.08) 33%, transparent 69%); pointer-events: none; }
      .hero-grid { display: grid; grid-template-columns: minmax(0, 1.07fr) minmax(410px, .93fr); align-items: center; gap: 78px; position: relative; z-index: 1; }
      .eyebrow { color: var(--ember-orange); font: 500 11px/1.2 'DM Mono', monospace; letter-spacing: .15em; text-transform: uppercase; margin: 0 0 28px; }
      .eyebrow--light { color: var(--ember-gold); }
      .hero-title { font: 600 clamp(48px, 6vw, 86px)/.98 'Space Grotesk', sans-serif; letter-spacing: -.075em; margin: 0; max-width: 720px; }
      .hero-title em { color: var(--ember-orange); font-style: normal; position: relative; white-space: nowrap; }
      .hero-title em::after { content: ""; position: absolute; left: 2px; right: -8px; bottom: -9px; height: 9px; background: url("data:image/svg+xml,%3Csvg width='200' height='12' viewBox='0 0 200 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 8C55 3 126 10 198 3' stroke='%23F47730' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") center/100% 100% no-repeat; transform: rotate(-1deg); }
      .hero-deck { max-width: 500px; color: #c1b7aa; font-size: 17px; line-height: 1.65; margin: 38px 0 35px; }
      .capture-form { max-width: 660px; }
      .capture-fields { display: grid; grid-template-columns: 1fr 1.22fr; gap: 10px; }
      .capture-form label { display: block; }
      .capture-form label > span { display: block; color: #928a81; font: 10px 'DM Mono', monospace; letter-spacing: .1em; text-transform: uppercase; margin: 0 0 8px 2px; }
      .capture-form input { width: 100%; height: 54px; border: 1px solid #4d4944; background: #22201e; color: var(--ember-paper); border-radius: 2px; padding: 0 15px; outline: none; font: 14px 'DM Sans', sans-serif; transition: border-color .2s ease, background .2s ease; }
      .capture-form input::placeholder { color: #6c6761; }
      .capture-form input:focus { border-color: var(--ember-orange); background: #282522; }
      .ember-button { min-height: 52px; margin-top: 14px; padding: 0 19px 0 22px; border: 0; border-radius: 2px; background: var(--ember-orange); color: var(--ember-ink); display: inline-flex; align-items: center; gap: 22px; font: 600 14px 'DM Sans', sans-serif; cursor: pointer; transition: background .25s ease, transform .25s ease; }
      .ember-button:hover { background: #ff9954; transform: translateY(-2px); }
      .arrow-icon { display: inline-flex; width: 19px; height: 19px; align-items: center; justify-content: center; }
      .arrow-icon svg { width: 100%; height: 100%; }
      .arrow-icon--dark { color: #5f5953; width: 14px; height: 14px; vertical-align: middle; margin-left: 4px; }
      .capture-note { color: #777069; font-size: 11px; margin: 14px 0 0 2px; }
      .capture-success { display: flex; gap: 14px; align-items: center; min-height: 122px; max-width: 560px; border: 1px solid #4d4944; background: #22201e; padding: 22px 24px; }
      .success-dot { width: 11px; height: 11px; border-radius: 50%; background: var(--ember-orange); box-shadow: 0 0 0 6px rgba(244,119,48,.12); flex: 0 0 auto; }
      .capture-success strong { font: 600 16px 'Space Grotesk', sans-serif; }
      .capture-success p { color: #9f968b; margin: 7px 0 0; font-size: 13px; }
      .hero-art { min-height: 516px; position: relative; display: flex; align-items: center; justify-content: center; }
      .hero-art::before { content: ""; position: absolute; width: 390px; height: 390px; border: 1px solid rgba(230,168,61,.22); border-radius: 50%; }
      .hero-art::after { content: ""; position: absolute; width: 500px; height: 500px; border: 1px solid rgba(244,119,48,.1); border-radius: 50%; }
      .hero-orbit { position: absolute; width: 450px; height: 450px; border: 1px dashed rgba(230,168,61,.25); border-radius: 50%; transform: rotate(-22deg); }
      .hero-orbit::before, .hero-orbit::after { content: ""; position: absolute; width: 7px; height: 7px; background: var(--ember-orange); border-radius: 50%; }
      .hero-orbit::before { top: 44px; left: 44px; } .hero-orbit::after { bottom: 22px; right: 70px; background: var(--ember-gold); }
      .hero-glow { position: absolute; width: 250px; height: 250px; border-radius: 50%; background: radial-gradient(circle, rgba(255,169,56,.55), rgba(244,119,48,.09) 40%, transparent 70%); filter: blur(2px); }
      .hero-mark { transform: scale(3.1); z-index: 1; }
      .hero-scribble { position: absolute; z-index: 2; color: var(--ember-gold); font: 700 16px 'Kalam', cursive; transform: rotate(-10deg); bottom: 45px; right: 7px; }
      .hero-scribble::before { content: ""; position: absolute; width: 78px; height: 42px; left: -97px; top: -7px; border-top: 1px solid var(--ember-gold); border-radius: 50%; transform: rotate(13deg); }
      .hero-scribble::after { content: ""; position: absolute; left: -20px; top: 12px; width: 22px; height: 1px; background: var(--ember-gold); transform: rotate(-30deg); }
      .scroll-cue { position: absolute; bottom: 37px; left: 0; display: flex; gap: 12px; align-items: center; color: #6f675e; font: 10px 'DM Mono', monospace; letter-spacing: .1em; text-transform: uppercase; }
      .scroll-cue span { display: block; width: 30px; height: 1px; background: #6f675e; }
      .paper-section { background: var(--ember-paper); color: var(--ember-ink); position: relative; }
      .paper-section::before { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 13px; background: repeating-linear-gradient(145deg, transparent 0 13px, rgba(23,22,21,.035) 14px 15px, transparent 16px 25px); opacity: .6; }
      .blindspot-section { padding: 135px 0 145px; }
      .section-intro { display: flex; justify-content: space-between; align-items: end; gap: 60px; margin-bottom: 62px; }
      .section-title { font: 600 clamp(36px, 4.8vw, 63px)/1 'Space Grotesk', sans-serif; letter-spacing: -.07em; margin: 0; max-width: 640px; }
      .section-title em { color: var(--ember-orange); font-style: normal; }
      .section-intro-copy { max-width: 300px; color: #736b63; font-size: 14px; line-height: 1.6; margin: 0 0 6px; }
      .leaderboard-wrap { max-width: 1050px; margin: 0 auto; position: relative; padding: 0 40px; }
      .leaderboard { background: #fffaf4; border: 1px solid #d9cec0; box-shadow: 16px 16px 0 #e2d5c6; position: relative; transform: rotate(-1deg); }
      .leaderboard-head { height: 49px; border-bottom: 1px solid #e7ddd2; display: flex; justify-content: space-between; align-items: center; padding: 0 24px; color: #898078; font: 11px 'DM Mono', monospace; }
      .skool-chip { color: #82786e; border: 1px solid #e1d7cd; padding: 6px 10px; border-radius: 99px; font-size: 9px; letter-spacing: .03em; }
      .skool-chip i { display: inline-block; width: 6px; height: 6px; background: #d3c3b1; border-radius: 50%; margin-right: 6px; }
      .leaderboard-title { display: flex; align-items: center; justify-content: space-between; padding: 25px 29px 16px; }
      .tiny-label { display: block; color: #a69c92; font: 9px 'DM Mono', monospace; text-transform: uppercase; letter-spacing: .12em; margin-bottom: 7px; }
      .leaderboard-title strong { font: 600 23px 'Space Grotesk', sans-serif; letter-spacing: -.04em; }
      .leaderboard-dots { color: #b9aea4; letter-spacing: 3px; }
      .leaderboard-tabs { display: flex; gap: 25px; padding: 0 29px 13px; border-bottom: 1px solid #e9e0d7; color: #aaa096; font: 11px 'DM Mono', monospace; }
      .leaderboard-tabs .tab-active { color: #4f4840; border-bottom: 2px solid var(--ember-orange); padding-bottom: 12px; margin-bottom: -14px; }
      .leaderboard-rows { padding: 5px 17px; }
      .member-row { display: grid; grid-template-columns: 34px 34px 1fr 100px 120px; gap: 15px; align-items: center; min-height: 63px; border-bottom: 1px solid #eee6dd; padding: 0 12px; color: #37312b; }
      .member-row:last-child { border-bottom: 0; }
      .member-row--quiet { background: #fef0e7; border: 1px solid #f9c6a4; margin: 1px -1px; position: relative; }
      .member-rank { color: #a79c90; font: 11px 'DM Mono', monospace; }
      .member-avatar { width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: #292622; color: #f5e7d6; font: 10px 'DM Mono', monospace; }
      .member-row:nth-child(2) .member-avatar { background: #c56837; } .member-row:nth-child(3) .member-avatar { background: #6d6256; } .member-row:nth-child(4) .member-avatar { background: #d3a45d; color: #33271c; }
      .member-name { font-size: 13px; font-weight: 600; }
      .member-points { font: 13px 'DM Mono', monospace; text-align: right; } .member-points small { color: #a89c90; font: 9px 'DM Sans', sans-serif; }
      .member-active { color: #7b736b; font: 10px 'DM Mono', monospace; text-align: right; }
      .member-active i { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #8db68c; margin-right: 4px; }
      .member-active--quiet { color: var(--ember-orange); font-weight: 500; } .member-active--quiet i { background: var(--ember-orange); }
      .leaderboard-foot { display: flex; justify-content: space-between; padding: 16px 29px 20px; color: #a0988e; font: 10px 'DM Mono', monospace; }
      .leaderboard-note { position: absolute; z-index: 2; right: -2px; top: 42%; width: 175px; color: var(--ember-orange); font: 700 20px/1.08 'Kalam', cursive; transform: rotate(8deg); }
      .note-line { width: 82px; height: 43px; display: block; border-top: 2px solid var(--ember-orange); border-radius: 50%; transform: rotate(-15deg); position: absolute; left: -78px; top: 20px; }
      .note-line::after { content: ""; position: absolute; width: 11px; height: 11px; border-left: 2px solid var(--ember-orange); border-bottom: 2px solid var(--ember-orange); transform: rotate(25deg); left: -2px; top: -7px; }
      .steps-section { background: #201e1b; padding: 115px 0 135px; }
      .steps-section .section-title { color: var(--ember-paper); max-width: 650px; }
      .steps-header { display: flex; justify-content: space-between; align-items: end; border-bottom: 1px solid var(--ember-line); padding-bottom: 52px; }
      .steps-header-copy { max-width: 270px; color: #978c80; font-size: 14px; line-height: 1.55; margin: 0 0 4px; }
      .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
      .step { padding: 47px 42px 0 0; min-height: 240px; border-right: 1px solid var(--ember-line); position: relative; }
      .step + .step { padding-left: 42px; } .step:last-child { border-right: 0; }
      .step-number { display: block; color: var(--ember-orange); font: 11px 'DM Mono', monospace; margin-bottom: 36px; }
      .step h3 { font: 600 25px 'Space Grotesk', sans-serif; letter-spacing: -.05em; margin: 0 0 12px; }
      .step p { max-width: 240px; color: #9c9285; font-size: 13px; line-height: 1.6; margin: 0; }
      .step-arrow { position: absolute; right: 33px; top: 52px; color: #5d554b; font-size: 25px; }
      .report-section { padding: 145px 0 155px; }
      .report-intro { max-width: 560px; margin-bottom: 68px; }
      .report-intro p:not(.eyebrow) { max-width: 470px; color: #746c64; font-size: 16px; line-height: 1.65; margin: 28px 0 0; }
      .report-layout { display: grid; grid-template-columns: 1fr .88fr; gap: 94px; align-items: center; }
      .report-sheet { background: #fffdf9; color: #26221e; min-height: 560px; padding: 33px 42px; position: relative; box-shadow: 14px 15px 0 #dfd3c5; transform: rotate(1.1deg); }
      .report-sheet::before { content: ""; position: absolute; inset: 16px; border: 1px solid #eee5dc; pointer-events: none; }
      .report-sheet__top, .report-sheet__footer { display: flex; justify-content: space-between; position: relative; z-index: 1; color: #a0978d; font: 9px 'DM Mono', monospace; }
      .report-stamp { color: var(--ember-orange); letter-spacing: .12em; } .report-date { text-align: right; }
      .report-sheet__title { margin: 77px 0 35px; position: relative; z-index: 1; } .report-sheet__title span { display: block; font: italic 20px Georgia, serif; color: #8e8479; margin-bottom: 3px; } .report-sheet__title strong { font: 600 42px/.95 'Space Grotesk', sans-serif; letter-spacing: -.08em; }
      .report-sheet__rule { height: 1px; background: #ddd2c6; margin-bottom: 29px; position: relative; z-index: 1; }
      .report-member { display: flex; align-items: center; gap: 13px; position: relative; z-index: 1; } .member-avatar--large { width: 42px; height: 42px; background: #c56837; }
      .report-member div { display: grid; gap: 4px; } .report-member strong { font-size: 13px; } .report-member div span { color: #958a7e; font: 10px 'DM Mono', monospace; }
      .report-alert { margin-left: auto; color: var(--ember-orange); font: 10px 'DM Mono', monospace; border: 1px solid #f2bc96; padding: 5px 8px; }
      .report-copy { position: relative; z-index: 1; margin: 32px 0 80px; max-width: 390px; } .report-copy p { font: 16px/1.55 Georgia, serif; color: #4e4740; } .report-copy .report-highlight { font: 600 15px/1.5 'DM Sans', sans-serif; color: #29241f; border-left: 2px solid var(--ember-orange); padding-left: 14px; margin-top: 25px; }
      .report-sheet__footer { position: absolute; left: 42px; right: 42px; bottom: 31px; }
      .report-pencil { position: absolute; right: 57px; bottom: 73px; color: var(--ember-orange); font: 700 18px 'Kalam', cursive; transform: rotate(-8deg); }
      .report-pencil::after { content: ""; position: absolute; width: 81px; height: 13px; border-bottom: 2px solid var(--ember-orange); left: -12px; bottom: -8px; border-radius: 50%; }
      .report-points { display: grid; gap: 32px; } .report-point { display: grid; grid-template-columns: 50px 1fr; gap: 18px; align-items: start; border-top: 1px solid #d8cdc0; padding-top: 20px; } .report-point:first-child { border-top: 0; padding-top: 0; }
      .report-point-number { color: var(--ember-orange); font: 11px 'DM Mono', monospace; } .report-point h3 { font: 600 20px 'Space Grotesk', sans-serif; letter-spacing: -.04em; margin: 0 0 7px; } .report-point p { color: #766d65; font-size: 13px; line-height: 1.6; margin: 0; max-width: 300px; }
      .pricing-section { background: #d9c9b7; color: #221f1c; padding: 133px 0 145px; position: relative; } .pricing-section::after { content: "a human look"; position: absolute; font: 700 22px 'Kalam', cursive; color: rgba(244,119,48,.75); transform: rotate(-8deg); right: 8%; top: 104px; }
      .pricing-heading { display: grid; grid-template-columns: 1fr .8fr; gap: 80px; align-items: end; padding-bottom: 66px; border-bottom: 1px solid rgba(34,31,28,.22); } .pricing-heading .section-title { max-width: 520px; } .pricing-heading-copy { color: #75695e; font-size: 15px; line-height: 1.6; max-width: 290px; margin: 0 0 4px; }
      .pricing-main { padding: 45px 0 0; display: grid; grid-template-columns: 1.35fr .65fr; gap: 0; } .price-feature { border-right: 1px solid rgba(34,31,28,.22); padding-right: 68px; } .price-feature .eyebrow { color: #9c4c27; margin-bottom: 18px; } .price-amount { font: 600 clamp(52px, 7vw, 85px)/.9 'Space Grotesk', sans-serif; letter-spacing: -.09em; margin: 0 0 15px; } .price-amount span { color: #75695e; font-size: 18px; letter-spacing: -.03em; } .price-description { max-width: 430px; color: #695e54; font-size: 15px; line-height: 1.6; margin: 0 0 32px; }
      .price-list { display: grid; gap: 0; } .price-list li { list-style: none; border-top: 1px solid rgba(34,31,28,.22); padding: 16px 0; font-size: 13px; } .price-list li::before { content: "↳"; color: var(--ember-orange); margin-right: 11px; }
      .price-details { padding-left: 68px; display: grid; align-content: start; gap: 24px; } .price-detail { border-bottom: 1px solid rgba(34,31,28,.22); padding-bottom: 23px; } .price-detail span { display: block; color: #887b6e; font: 10px 'DM Mono', monospace; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 9px; } .price-detail strong { font: 500 21px 'Space Grotesk', sans-serif; letter-spacing: -.04em; }
      .why-section { padding: 142px 0 125px; } .why-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 110px; } .why-grid .section-title { max-width: 410px; } .why-copy { color: #b0a69b; font-size: 16px; line-height: 1.68; max-width: 460px; margin: 24px 0 0; } .why-list { border-top: 1px solid var(--ember-line); } .why-item { display: grid; grid-template-columns: 55px 1fr; gap: 20px; border-bottom: 1px solid var(--ember-line); padding: 27px 0 30px; } .why-item-number { color: var(--ember-orange); font: 11px 'DM Mono', monospace; padding-top: 3px; } .why-item h3 { font: 600 22px 'Space Grotesk', sans-serif; letter-spacing: -.05em; margin: 0 0 7px; } .why-item p { color: #93897c; font-size: 13px; line-height: 1.6; margin: 0; max-width: 415px; }
      .signoff-section { background: var(--ember-orange); color: var(--ember-ink); padding: 102px 0 109px; overflow: hidden; position: relative; } .signoff-section::before { content: ""; width: 360px; height: 360px; position: absolute; right: -50px; top: -120px; border: 1px solid rgba(23,22,21,.22); border-radius: 50%; box-shadow: 0 0 0 30px rgba(23,22,21,.04), 0 0 0 60px rgba(23,22,21,.04); } .signoff-layout { display: flex; justify-content: space-between; align-items: end; gap: 50px; position: relative; z-index: 1; } .signoff-copy { max-width: 560px; } .signoff-copy .eyebrow { color: #713b22; } .signoff-copy h2 { font: 600 clamp(37px, 5vw, 65px)/.96 'Space Grotesk', sans-serif; letter-spacing: -.08em; margin: 0; } .signoff-copy p { color: #713b22; font: italic 17px/1.55 Georgia, serif; margin: 23px 0 0; max-width: 410px; } .signature { font: 700 24px 'Kalam', cursive; transform: rotate(-5deg); padding-bottom: 8px; border-bottom: 2px solid rgba(23,22,21,.55); min-width: 140px; text-align: center; }
      .final-section { background: #f5efe7; color: var(--ember-ink); padding: 125px 0 62px; } .final-layout { display: grid; grid-template-columns: .86fr 1.14fr; gap: 110px; align-items: start; } .final-layout .section-title { max-width: 370px; } .final-copy { color: #7c7269; font-size: 15px; line-height: 1.6; margin: 25px 0 0; max-width: 300px; } .capture-form--compact { max-width: 100%; padding-top: 15px; } .capture-form--compact .capture-fields { grid-template-columns: 1fr; gap: 17px; } .capture-form--compact label > span { color: #80766d; } .capture-form--compact input { background: transparent; border-color: #cfc1b2; color: var(--ember-ink); } .capture-form--compact input::placeholder { color: #a59b91; } .capture-form--compact input:focus { background: #fffaf4; } .capture-form--compact .ember-button { width: 100%; justify-content: space-between; background: var(--ember-ink); color: var(--ember-paper); margin-top: 18px; } .capture-form--compact .ember-button:hover { background: #35302b; } .capture-form--compact .capture-note { color: #9a9085; } .capture-success--compact { color: var(--ember-ink); border-color: #d0c1b1; background: #fffaf4; } .capture-success--compact p { color: #84796e; }
      .ember-footer { border-top: 1px solid #d9cfc4; margin-top: 104px; padding-top: 22px; display: flex; align-items: center; justify-content: space-between; color: #978d83; font: 10px 'DM Mono', monospace; } .footer-mark { color: #514941; display: inline-flex; align-items: center; gap: 8px; font: 600 14px 'Space Grotesk', sans-serif; }
      .reveal { animation: rise-in .8s cubic-bezier(.2,.75,.2,1) both; } .reveal-delay-1 { animation-delay: .12s; } .reveal-delay-2 { animation-delay: .23s; } .reveal-delay-3 { animation-delay: .34s; } @keyframes rise-in { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
      @media (max-width: 800px) { .ember-shell { width: min(100% - 38px, 620px); } .ember-topbar { height: 70px; } .ember-hero { padding: 72px 0 90px; } .hero-grid, .report-layout, .why-grid, .final-layout { grid-template-columns: 1fr; gap: 58px; } .hero-art { min-height: 360px; order: -1; } .hero-mark { transform: scale(2.25); } .hero-art::before { width: 285px; height: 285px; } .hero-art::after { width: 360px; height: 360px; } .hero-orbit { width: 330px; height: 330px; } .hero-scribble { right: 13%; bottom: 5px; } .scroll-cue { display: none; } .section-intro, .steps-header, .pricing-heading { display: block; } .section-intro-copy, .steps-header-copy, .pricing-heading-copy { margin-top: 22px; } .blindspot-section, .report-section, .why-section { padding: 95px 0 105px; } .leaderboard-wrap { padding: 0; margin-top: 50px; } .leaderboard-note { right: -3px; top: -65px; font-size: 17px; width: 145px; } .note-line { left: -77px; top: 16px; } .member-row { grid-template-columns: 25px 30px 1fr 88px; gap: 9px; padding: 0 8px; } .member-active { grid-column: 3 / 5; grid-row: 2; text-align: left; margin-top: -23px; margin-left: 40px; } .member-row { min-height: 72px; } .leaderboard-rows { padding: 5px 11px; } .leaderboard-foot { padding-left: 20px; padding-right: 20px; } .steps-section { padding: 90px 0 100px; } .steps-header { padding-bottom: 34px; } .steps-grid { grid-template-columns: 1fr; } .step, .step + .step { border-right: 0; border-bottom: 1px solid var(--ember-line); padding: 28px 0 31px; min-height: 0; } .step:last-child { border-bottom: 0; } .step-number { margin-bottom: 18px; } .step-arrow { right: 4px; top: 28px; } .report-sheet { min-height: 525px; padding: 28px 25px; } .report-sheet__title { margin-top: 65px; } .report-sheet__title strong { font-size: 36px; } .report-sheet__footer { left: 25px; right: 25px; } .report-layout { gap: 78px; } .pricing-section { padding: 95px 0 108px; } .pricing-section::after { top: 48px; right: 9%; } .pricing-main { grid-template-columns: 1fr; gap: 42px; } .price-feature { border-right: 0; border-bottom: 1px solid rgba(34,31,28,.22); padding: 0 0 42px; } .price-details { padding-left: 0; } .signoff-section { padding: 82px 0 88px; } .signoff-layout { display: block; } .signature { margin-top: 38px; width: 145px; } .final-section { padding: 90px 0 45px; } .final-layout { gap: 32px; } .ember-footer { margin-top: 75px; align-items: flex-start; gap: 20px; } }
      @media (prefers-reduced-motion: reduce) { .reveal { animation: none; } *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; } }
    `}</style>
  );
}

export function EmberLanding() {
  return (
    <main className="ember-page">
      <EmberLandingStyles />
      <header className="ember-shell ember-topbar">
        <a className="ember-wordmark" href="#top" aria-label="Ember home"><EmberMark small />Ember</a>
        <a className="top-cta" href="#report">Get the report <Arrow /></a>
      </header>

      <section className="ember-shell ember-hero" id="top">
        <div className="hero-grid">
          <div className="reveal">
            <Eyebrow>For Skool community owners</Eyebrow>
            <h1 className="hero-title">Your leaderboard shows who&apos;s winning. It doesn&apos;t show who&apos;s <em>slipping away.</em></h1>
            <p className="hero-deck">A member can be ranked near the top and still not log in for 11 days. Ember looks past the points and tells you who might need a thoughtful nudge.</p>
            <CaptureForm />
          </div>
          <div className="hero-art reveal reveal-delay-2" aria-label="Ember nested mark surrounded by a warm orbit">
            <span className="hero-orbit" /><span className="hero-glow" /><EmberMark /><span className="hero-scribble">there you are</span>
          </div>
        </div>
        <div className="scroll-cue"><span />A closer look below</div>
      </section>

      <section className="paper-section blindspot-section">
        <div className="ember-shell">
          <div className="section-intro reveal">
            <div><Eyebrow>01 / The blind spot</Eyebrow><h2 className="section-title">The quiet part is usually hiding in plain <em>sight.</em></h2></div>
            <p className="section-intro-copy">Skool makes activity visible. That is useful. It also leaves a small, human-sized gap between a score and a person.</p>
          </div>
          <Leaderboard />
          <p className="section-intro-copy" style={{ maxWidth: 420, margin: "72px 0 0 auto" }}>The third-place member is not a problem to solve. They are a person worth noticing before the silence gets comfortable.</p>
        </div>
      </section>

      <section className="steps-section">
        <div className="ember-shell">
          <div className="steps-header reveal">
            <div><Eyebrow light>02 / A small handoff</Eyebrow><h2 className="section-title">You keep running the room.<br />We look a little closer.</h2></div>
            <p className="steps-header-copy">No dashboard. No new process for your members. Just seven days of careful looking from the sidelines.</p>
          </div>
          <div className="steps-grid">
            <div className="step reveal reveal-delay-1"><span className="step-number">01</span><span className="step-arrow">↗</span><h3>Send the invite</h3><p>Share your community URL and the email where you want the note. That is the whole setup.</p></div>
            <div className="step reveal reveal-delay-2"><span className="step-number">02</span><span className="step-arrow">↗</span><h3>We watch for 7 days</h3><p>Ember pays attention to the gap between a strong rank and a quiet visit, with context from the room.</p></div>
            <div className="step reveal reveal-delay-3"><span className="step-number">03</span><span className="step-arrow">↗</span><h3>Receive the report</h3><p>You get a short Ghost Member Report with names, signals, and one sensible next move for each.</p></div>
          </div>
        </div>
      </section>

      <section className="paper-section report-section">
        <div className="ember-shell">
          <div className="report-intro reveal"><Eyebrow>03 / What comes back</Eyebrow><h2 className="section-title">The <em>Ghost Member</em> Report</h2><p>A brief, plainspoken field note about the people your leaderboard cannot quite account for.</p></div>
          <div className="report-layout">
            <ReportSheet />
            <div className="report-points">
              <div className="report-point reveal reveal-delay-1"><span className="report-point-number">01</span><div><h3>A short list, not a data dump</h3><p>Only the members who deserve a closer look. Names and the small clues that made us pause.</p></div></div>
              <div className="report-point reveal reveal-delay-2"><span className="report-point-number">02</span><div><h3>Context from your actual room</h3><p>Recent posts, replies, wins, and the shape of someone&apos;s presence — not a generic score.</p></div></div>
              <div className="report-point reveal reveal-delay-3"><span className="report-point-number">03</span><div><h3>A human next move</h3><p>A simple suggestion for reaching out in a way that sounds like you, not a sequence.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="ember-shell">
          <div className="pricing-heading reveal"><div><Eyebrow>04 / Keep it simple</Eyebrow><h2 className="section-title">A careful look should not become another thing to manage.</h2></div><p className="pricing-heading-copy">Start with one community and see what the report gives you. Stay only if the work is useful.</p></div>
          <div className="pricing-main">
            <div className="price-feature"><Eyebrow>Start here</Eyebrow><p className="price-amount">Free <span>7-day look</span></p><p className="price-description">Ember watches your community for a week and returns the first Ghost Member Report at no cost.</p><ul className="price-list"><li>One Skool community</li><li>One short report, sent by email</li><li>No software, setup, or call</li></ul></div>
            <div className="price-details"><div className="price-detail"><span>After the first look</span><strong>[base fee]/month</strong></div><div className="price-detail"><span>When someone comes back</span><strong>[fee] per member brought back</strong></div><p style={{ color: "#75695e", fontSize: 12, lineHeight: 1.5, margin: 0 }}>Pricing stays editable as Ember grows. The work stays narrow.</p></div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="ember-shell why-grid">
          <div className="reveal"><Eyebrow>05 / Why Ember</Eyebrow><h2 className="section-title">Close enough to notice. Small enough to care.</h2><p className="why-copy">Ember is for owners who know their members by name and do not want that feeling replaced by another automated growth machine.</p></div>
          <div className="why-list">
            <div className="why-item reveal reveal-delay-1"><span className="why-item-number">01</span><div><h3>Skool-specific by choice</h3><p>We know where the useful clues live: the leaderboard, the classroom, the wins, and the conversations between them.</p></div></div>
            <div className="why-item reveal reveal-delay-2"><span className="why-item-number">02</span><div><h3>Founder-delivered work</h3><p>The person who notices the pattern is the person who writes your report. No handoff to a faceless team.</p></div></div>
            <div className="why-item reveal reveal-delay-3"><span className="why-item-number">03</span><div><h3>A narrow scope</h3><p>We do not build your funnel, run your content, or tell you how to lead. We look for the quiet member and hand you the thread.</p></div></div>
          </div>
        </div>
      </section>

      <section className="signoff-section">
        <div className="ember-shell signoff-layout">
          <div className="signoff-copy"><Eyebrow>One last thing</Eyebrow><h2>A thoughtful community deserves thoughtful attention.</h2><p>“I started Ember because the people who quietly leave are often the ones nobody thought to ask about.”</p></div>
          <div className="signature">— Rowan, founder</div>
        </div>
      </section>

      <section className="final-section" id="report">
        <div className="ember-shell">
          <div className="final-layout">
            <div><Eyebrow>Start with a look</Eyebrow><h2 className="section-title">See what your leaderboard misses.</h2><p className="final-copy">Give Ember seven days and a place to look. We will send back something you can use.</p></div>
            <CaptureForm compact />
          </div>
          <footer className="ember-footer"><span className="footer-mark"><EmberMark small />Ember</span><span>For Skool community owners · A small founder-led studio</span><span>© 2024</span></footer>
        </div>
      </section>
    </main>
  );
}
