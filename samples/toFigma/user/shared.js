/* =============================================
   KING & QUEEN User App - Figma Export Engine
   Clones phone frames for each screen/state
   ============================================= */

// ---------- Phone Frame HTML Template ----------
const PHONE_TEMPLATE = `
<div class="status-bar">
  <span class="time">9:41</span>
  <span class="icons">
    <i class="fas fa-signal"></i>
    <i class="fas fa-wifi"></i>
    <i class="fas fa-battery-full"></i>
  </span>
</div>

<!-- Auth Screen -->
<div class="auth-screen" data-screen="auth" style="display:none">
  <div class="auth-logo">
    <i class="fas fa-chess-king"></i>
    <h1>KING<b>&amp;</b>QUEEN</h1>
    <p class="auth-subtitle">アカウントにサインイン</p>
  </div>
  <div class="card">
    <div class="auth-tabs">
      <div class="auth-tab active" data-tab="signin">ログイン</div>
      <div class="auth-tab" data-tab="signup">アカウントを作成</div>
    </div>
    <div class="apply-label">メールアドレス</div>
    <input class="text-field" placeholder="mail@example.com">
    <div style="height:12px"></div>
    <div class="apply-label">パスワード</div>
    <input class="text-field" type="password" placeholder="••••••••">
    <div class="signup-fields" style="display:none">
      <div style="height:12px"></div>
      <div class="apply-label">パスワード（確認）</div>
      <input class="text-field" type="password" placeholder="••••••••">
      <div class="check-row" style="margin-top:16px">
        <div class="checkbox"></div>
        <span style="font-size:13px;font-weight:700;color:#374151"><span style="color:var(--brand);font-weight:700">利用規約</span>・<span style="color:var(--brand);font-weight:700">プライバシーポリシー</span>に同意する</span>
      </div>
    </div>
    <button class="btn-primary" style="margin-top:20px">
      <span class="auth-btn-text">ログイン</span>
    </button>
    <div class="auth-forgot-link auth-link">パスワードをお忘れの方</div>
    <div class="auth-existing-link auth-link" style="display:none">既にアカウントをお持ちの方はこちら</div>
  </div>
</div>

<!-- Forgot Password Screen -->
<div class="auth-screen" data-screen="forgot" style="display:none">
  <div class="auth-logo">
    <i class="fas fa-chess-king"></i>
    <h1>KING<b>&amp;</b>QUEEN</h1>
    <p>パスワードをお忘れの方</p>
  </div>
  <div class="card">
    <div class="apply-label">登録メールアドレス</div>
    <input class="text-field" placeholder="mail@example.com">
    <button class="btn-primary" style="margin-top:20px">リセットメールを送信</button>
    <div class="auth-link">ログインに戻る</div>
  </div>
</div>

<!-- Reset Sent Screen -->
<div class="auth-screen" data-screen="reset-sent" style="display:none">
  <div class="auth-logo">
    <i class="fas fa-chess-king"></i>
    <h1>KING<b>&amp;</b>QUEEN</h1>
    <p>パスワードをお忘れの方</p>
  </div>
  <div class="card" style="text-align:center;padding:24px">
    <i class="fas fa-envelope-open-text" style="font-size:36px;color:var(--brand)"></i>
    <div style="font-weight:900;color:var(--text-primary);font-size:16px;margin-top:12px">リセットメールを送信しました</div>
    <div style="color:var(--text-secondary);font-weight:700;margin-top:8px;line-height:20px">メールをご確認ください。<br>メール内のリンクからパスワードを再設定してください。</div>
    <button class="btn-primary" style="margin-top:20px">ログインへ</button>
  </div>
</div>

<!-- App Header -->
<div class="app-header" data-part="header" style="display:none">
  <div class="logo-area">
    <i class="fas fa-chess-king"></i>
    <span>K<b>&amp;</b>Q</span>
  </div>
  <div class="header-right">
    <div class="wallet-pill">
      <div class="wallet-dot on"></div>
      <div>
        <div class="wallet-pill-top">Wallet Connected</div>
        <div class="wallet-pill-text">IZAKA-YA...8f2a</div>
      </div>
    </div>
    <div class="notif-btn">
      <i class="fas fa-bell"></i>
      <div class="bell-badge">6</div>
    </div>
  </div>
</div>

<!-- Main Content Area -->
<div class="main-content" data-part="main" style="display:none">

  <!-- Dashboard -->
  <div class="page hidden" data-page="dashboard">
    <div class="card">
      <div class="card-subtitle">アセット構成</div>
      <div class="donut-section">
        <div class="donut-svg">
          <svg width="148" height="148" viewBox="0 0 148 148">
            <circle cx="74" cy="74" r="60" fill="none" stroke="#F3F4F6" stroke-width="14"/>
            <circle class="donut-seg" cx="74" cy="74" r="60" fill="none" stroke="#C62828" stroke-width="14" stroke-dasharray="106 377" stroke-dashoffset="0" stroke-linecap="butt"/>
            <circle class="donut-seg" cx="74" cy="74" r="60" fill="none" stroke="#F7931A" stroke-width="14" stroke-dasharray="83 377" stroke-dashoffset="-106" stroke-linecap="butt"/>
            <circle class="donut-seg" cx="74" cy="74" r="60" fill="none" stroke="#627EEA" stroke-width="14" stroke-dasharray="49 377" stroke-dashoffset="-189" stroke-linecap="butt"/>
            <circle class="donut-seg" cx="74" cy="74" r="60" fill="none" stroke="#26A17B" stroke-width="14" stroke-dasharray="26 377" stroke-dashoffset="-238" stroke-linecap="butt"/>
            <circle class="donut-seg" cx="74" cy="74" r="60" fill="none" stroke="#23292F" stroke-width="14" stroke-dasharray="19 377" stroke-dashoffset="-264" stroke-linecap="butt"/>
            <circle class="donut-seg" cx="74" cy="74" r="60" fill="none" stroke="#2775CA" stroke-width="14" stroke-dasharray="34 377" stroke-dashoffset="-283" stroke-linecap="butt"/>
            <circle class="donut-seg" cx="74" cy="74" r="60" fill="none" stroke="#DC2626" stroke-width="14" stroke-dasharray="23 377" stroke-dashoffset="-317" stroke-linecap="butt"/>
            <circle class="donut-seg" cx="74" cy="74" r="60" fill="none" stroke="#3B82F6" stroke-width="14" stroke-dasharray="23 377" stroke-dashoffset="-340" stroke-linecap="butt"/>
            <circle class="donut-seg" cx="74" cy="74" r="60" fill="none" stroke="#8B5CF6" stroke-width="14" stroke-dasharray="14 377" stroke-dashoffset="-363" stroke-linecap="butt"/>
          </svg>
          <div class="donut-center"></div>
        </div>
        <div class="donut-legend">
          <div class="donut-legend-row"><div class="donut-legend-dot" style="background:var(--brand)"></div><span class="donut-legend-label">KQ</span><span class="donut-legend-val">9,999</span></div>
          <div class="donut-legend-row"><div class="donut-legend-dot" style="background:#F7931A"></div><span class="donut-legend-label">BTC</span><span class="donut-legend-val">0.0500</span></div>
          <div class="donut-legend-row"><div class="donut-legend-dot" style="background:#627EEA"></div><span class="donut-legend-label">ETH</span><span class="donut-legend-val">0.8000</span></div>
          <div class="donut-legend-row"><div class="donut-legend-dot" style="background:#26A17B"></div><span class="donut-legend-label">USDT</span><span class="donut-legend-val">500</span></div>
          <div class="donut-legend-row"><div class="donut-legend-dot" style="background:#23292F"></div><span class="donut-legend-label">XRP</span><span class="donut-legend-val">200</span></div>
          <div class="donut-legend-row"><div class="donut-legend-dot" style="background:#2775CA"></div><span class="donut-legend-label">USDC</span><span class="donut-legend-val">300</span></div>
          <div class="donut-legend-row"><div class="donut-legend-dot" style="background:#DC2626"></div><span class="donut-legend-label">JPYR</span><span class="donut-legend-val">15,000</span></div>
          <div class="donut-legend-row"><div class="donut-legend-dot" style="background:#3B82F6"></div><span class="donut-legend-label">JPYC</span><span class="donut-legend-val">8,000</span></div>
          <div class="donut-legend-row"><div class="donut-legend-dot" style="background:#8B5CF6"></div><span class="donut-legend-label">IZAKAYA</span><span class="donut-legend-val">1,200</span></div>
        </div>
      </div>
      <div class="bar-chart-scroll" style="margin-top:12px;overflow-x:auto;padding-bottom:8px;display:flex;gap:14px">
        <div class="bar-chart-col"><div class="bar-chart-track"><div class="bar-chart-fill" style="height:96px;background:var(--brand)"></div></div><div class="bar-chart-amount">9,999</div><div class="bar-chart-label">KQ</div></div>
        <div class="bar-chart-col"><div class="bar-chart-track"><div class="bar-chart-fill" style="height:30px;background:#F7931A"></div></div><div class="bar-chart-amount">0.05</div><div class="bar-chart-label">BTC</div></div>
        <div class="bar-chart-col"><div class="bar-chart-track"><div class="bar-chart-fill" style="height:30px;background:#627EEA"></div></div><div class="bar-chart-amount">0.80</div><div class="bar-chart-label">ETH</div></div>
        <div class="bar-chart-col"><div class="bar-chart-track"><div class="bar-chart-fill" style="height:48px;background:#26A17B"></div></div><div class="bar-chart-amount">500</div><div class="bar-chart-label">USDT</div></div>
        <div class="bar-chart-col"><div class="bar-chart-track"><div class="bar-chart-fill" style="height:36px;background:#23292F"></div></div><div class="bar-chart-amount">200</div><div class="bar-chart-label">XRP</div></div>
        <div class="bar-chart-col"><div class="bar-chart-track"><div class="bar-chart-fill" style="height:40px;background:#2775CA"></div></div><div class="bar-chart-amount">300</div><div class="bar-chart-label">USDC</div></div>
        <div class="bar-chart-col"><div class="bar-chart-track"><div class="bar-chart-fill" style="height:24px;background:#DC2626"></div></div><div class="bar-chart-amount">15,000</div><div class="bar-chart-label">JPYR</div></div>
        <div class="bar-chart-col"><div class="bar-chart-track"><div class="bar-chart-fill" style="height:18px;background:#3B82F6"></div></div><div class="bar-chart-amount">8,000</div><div class="bar-chart-label">JPYC</div></div>
        <div class="bar-chart-col"><div class="bar-chart-track"><div class="bar-chart-fill" style="height:14px;background:#8B5CF6"></div></div><div class="bar-chart-amount">1,200</div><div class="bar-chart-label">IZAKAYA</div></div>
      </div>
    </div>

    <div class="card">
      <div class="card-subtitle">保有アセット</div>
      <div>
        <div class="asset-row"><div class="asset-icon" style="background:var(--brand)"><i class="fas fa-coins"></i></div><div><div class="asset-name">KQ</div><div class="asset-jpy">≈ ¥9,999</div></div><div class="asset-balance">9,999</div></div>
        <div class="asset-row"><div class="asset-icon" style="background:#F7931A"><i class="fab fa-bitcoin"></i></div><div><div class="asset-name">BTC</div><div class="asset-jpy">≈ ¥760,000</div></div><div class="asset-balance">0.0500</div></div>
        <div class="asset-row"><div class="asset-icon" style="background:#627EEA"><i class="fab fa-ethereum"></i></div><div><div class="asset-name">ETH</div><div class="asset-jpy">≈ ¥464,000</div></div><div class="asset-balance">0.8000</div></div>
        <div class="asset-row"><div class="asset-icon" style="background:#26A17B"><i class="fas fa-dollar-sign"></i></div><div><div class="asset-name">USDT</div><div class="asset-jpy">≈ ¥77,500</div></div><div class="asset-balance">500</div></div>
        <div class="asset-row"><div class="asset-icon" style="background:#23292F"><i class="fas fa-bolt"></i></div><div><div class="asset-name">XRP</div><div class="asset-jpy">≈ ¥17,000</div></div><div class="asset-balance">200</div></div>
        <div class="asset-row"><div class="asset-icon" style="background:#2775CA"><i class="fas fa-circle-dollar-to-slot"></i></div><div><div class="asset-name">USDC</div><div class="asset-jpy">≈ ¥46,500</div></div><div class="asset-balance">300</div></div>
        <div class="asset-row"><div class="asset-icon" style="background:transparent;padding:0"><img src="../../images/icon/jpyr.png" style="width:100%;height:100%;object-fit:contain;border-radius:2px"></div><div><div class="asset-name">JPYR</div><div class="asset-jpy">≈ ¥15,000</div></div><div class="asset-balance">15,000</div></div>
        <div class="asset-row"><div class="asset-icon" style="background:transparent;padding:0"><img src="../../images/icon/jpyc.svg" style="width:100%;height:100%;object-fit:contain;border-radius:2px"></div><div><div class="asset-name">JPYC</div><div class="asset-jpy">≈ ¥8,000</div></div><div class="asset-balance">8,000</div></div>
        <div class="asset-row"><div class="asset-icon" style="background:transparent;padding:0"><img src="../../images/icon/izakaya.png" style="width:100%;height:100%;object-fit:contain;border-radius:2px"></div><div><div class="asset-name">IZAKAYA</div><div class="asset-jpy">≈ ¥6,000</div></div><div class="asset-balance">1,200</div></div>
      </div>
    </div>

    <div class="card">
      <div class="card-subtitle">ランク</div>
      <div class="tier-line">
        <div class="tier-node-col"><div class="tier-node active" style="border-color:#92400E;background:#FEF3C7"><i class="fas fa-shield-alt" style="color:#92400E"></i></div><div class="tier-node-label" style="color:#92400E;font-weight:900">Member</div></div>
        <div class="tier-connector"></div>
        <div class="tier-node-col"><div class="tier-node"><i class="fas fa-gem" style="color:#D1D5DB"></i></div><div class="tier-node-label">Silver</div></div>
        <div class="tier-connector"></div>
        <div class="tier-node-col"><div class="tier-node"><i class="fas fa-crown" style="color:#D1D5DB"></i></div><div class="tier-node-label">Gold</div></div>
      </div>
      <div class="rank-card" style="border-color:rgba(146,64,14,0.55)">
        <div class="rank-card-header">
          <div class="rank-shield" style="background:#92400E"><i class="fas fa-shield-alt"></i></div>
          <div><div class="rank-card-name" style="color:#92400E">Member</div><div class="rank-card-sub">Next: Silver まであと 5,800 pt</div></div>
        </div>
        <div class="rank-progress-track"><div class="rank-progress-fill" style="width:42%;background:#92400E"></div></div>
        <div class="rank-progress-labels"><div class="rank-progress-label-text">4,200 pt</div><div class="rank-progress-label-text">42%</div></div>
        <div class="rank-benefit-row">
          <div class="rank-benefit-card" style="background:rgba(146,64,14,0.18)"><i class="fas fa-bolt" style="color:#92400E"></i><div class="rank-benefit-label">付与レート</div><div class="rank-benefit-value" style="color:#92400E">x1.00</div></div>
          <div class="rank-benefit-card" style="background:rgba(146,64,14,0.18)"><i class="fas fa-percentage" style="color:#92400E"></i><div class="rank-benefit-label">手数料</div><div class="rank-benefit-value" style="color:#92400E">優遇なし</div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Onboarding -->
  <div class="page hidden" data-page="onboarding">
    <div class="card"><div class="card-subtitle">口座</div></div>
    <div class="account-carousel">
      <div class="account-card">
        <div class="account-card-top"><div class="account-icon" style="background:#111827"><span class="account-icon-text" style="color:#fff">XM</span></div><div class="account-broker-name">XM Trading</div></div>
        <div class="account-card-bottom"><div class="account-no-row"><i class="fas fa-university" style="color:var(--text-muted);font-size:12px"></i><span class="account-no-text">·· 256558</span></div><div class="account-label">既存の口座A</div></div>
      </div>
      <div class="account-card">
        <div class="account-card-top"><div class="account-icon" style="background:#7E22CE"><span class="account-icon-text" style="color:#fff">GT</span></div><div class="account-broker-name">FX GT</div></div>
        <div class="account-card-bottom"><div class="account-no-row"><i class="fas fa-university" style="color:var(--text-muted);font-size:12px"></i><span class="account-no-text">·· 029384</span></div><div class="account-label">既存の口座B</div></div>
      </div>
      <div class="account-card">
        <div class="account-card-top"><div class="account-icon" style="background:#FACC15"><span class="account-icon-text" style="color:#111827">Ex</span></div><div class="account-broker-name">Exness</div></div>
        <div class="account-card-bottom"><div class="account-no-row"><i class="fas fa-university" style="color:var(--text-muted);font-size:12px"></i><span class="account-no-text">·· 201991</span></div><div class="account-label">既存の口座C</div></div>
      </div>
      <div class="account-card account-card-add">
        <div class="account-add-inner"><div class="account-add-circle"><i class="fas fa-plus" style="color:var(--text-muted);font-size:18px"></i></div><div class="account-add-title">New</div></div>
        <div class="account-add-desc">新しいブローカー口座を追加して<br>KQトークンを獲得しましょう。</div>
      </div>
    </div>
    <button class="btn-secondary" style="margin-top:14px"><i class="fas fa-clipboard-check" style="font-size:14px"></i><span>申請状況を確認</span></button>
  </div>

  <!-- Broker Picker -->
  <div class="page hidden" data-page="brokerPicker">
    <div class="card">
      <div class="card-subtitle">口座を追加</div>
      <input class="search-field" placeholder="業者を検索（例: XM）">
      <div style="margin-top:12px">
        <div class="picker-row"><div class="picker-icon" style="background:#111827"><span class="picker-icon-text" style="color:#fff">XM</span></div><div class="picker-name">XM Trading</div><div class="picker-go"><i class="fas fa-chevron-right"></i></div></div>
        <div class="picker-row"><div class="picker-icon" style="background:#7E22CE"><span class="picker-icon-text" style="color:#fff">GT</span></div><div class="picker-name">FX GT</div><div class="picker-go"><i class="fas fa-chevron-right"></i></div></div>
        <div class="picker-row"><div class="picker-icon" style="background:#FACC15"><span class="picker-icon-text" style="color:#111827">Ex</span></div><div class="picker-name">Exness</div><div class="picker-go"><i class="fas fa-chevron-right"></i></div></div>
        <div class="picker-row"><div class="picker-icon" style="background:#1D4ED8"><span class="picker-icon-text" style="color:#fff">IC</span></div><div class="picker-name">IC Markets</div><div class="picker-go"><i class="fas fa-chevron-right"></i></div></div>
        <div class="picker-row"><div class="picker-icon" style="background:#0F172A"><span class="picker-icon-text" style="color:#fff">AX</span></div><div class="picker-name">AXIORY</div><div class="picker-go"><i class="fas fa-chevron-right"></i></div></div>
        <div class="picker-row"><div class="picker-icon" style="background:#DC2626"><span class="picker-icon-text" style="color:#fff">HF</span></div><div class="picker-name">HFM (HotForex)</div><div class="picker-go"><i class="fas fa-chevron-right"></i></div></div>
        <div class="picker-row"><div class="picker-icon" style="background:#059669"><span class="picker-icon-text" style="color:#fff">VT</span></div><div class="picker-name">Vantage</div><div class="picker-go"><i class="fas fa-chevron-right"></i></div></div>
        <div class="picker-row"><div class="picker-icon" style="background:#7C3AED"><span class="picker-icon-text" style="color:#fff">FP</span></div><div class="picker-name">FxPro</div><div class="picker-go"><i class="fas fa-chevron-right"></i></div></div>
        <div class="picker-row"><div class="picker-icon" style="background:#111827"><span class="picker-icon-text" style="color:#fff">PP</span></div><div class="picker-name">Pepperstone</div><div class="picker-go"><i class="fas fa-chevron-right"></i></div></div>
        <div class="picker-row"><div class="picker-icon" style="background:#0EA5E9"><span class="picker-icon-text" style="color:#fff">FM</span></div><div class="picker-name">FP Markets</div><div class="picker-go"><i class="fas fa-chevron-right"></i></div></div>
        <div class="picker-row"><div class="picker-icon" style="background:#334155"><span class="picker-icon-text" style="color:#fff">TF</span></div><div class="picker-name">Titan FX</div><div class="picker-go"><i class="fas fa-chevron-right"></i></div></div>
      </div>
      <button class="btn-secondary" style="margin-top:12px">戻る</button>
    </div>
  </div>

  <!-- Broker Open -->
  <div class="page hidden" data-page="brokerOpen">
    <div class="card">
      <div class="card-subtitle">口座開設</div>
      <div class="picker-row"><div class="picker-icon" style="background:#111827"><span class="picker-icon-text" style="color:#fff">XM</span></div><div class="picker-name">XM Trading</div></div>
      <div class="mini-hint" style="margin-top:8px">最大レバレッジ1000倍。ボーナスが豊富で日本人利用率No.1。</div>
      <button class="btn-primary" style="margin-top:14px"><i class="fas fa-external-link-alt"></i><span>口座開設ページへ</span></button>
      <button class="btn-secondary" style="margin-top:10px"><i class="fas fa-clipboard-check" style="font-size:14px"></i><span>申請状況を確認</span></button>
      <button class="btn-secondary" style="margin-top:10px">戻る</button>
    </div>
  </div>

  <!-- Notifications -->
  <div class="page hidden" data-page="notifications">
    <div class="card">
      <div class="card-subtitle">申請状況</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="app-item"><div style="flex:1"><div class="app-title">XM Trading</div><div class="app-sub">968774256558</div></div><div class="status-pill status-ok">承認済み</div></div>
        <div class="app-item"><div style="flex:1"><div class="app-title">FX GT</div><div class="app-sub">1029384</div></div><div class="status-pill status-warn">確認中</div></div>
      </div>
      <button class="btn-secondary" style="margin-top:14px">戻る</button>
    </div>
  </div>

  <!-- Announcements -->
  <div class="page hidden" data-page="announcements">
    <div class="card">
      <div class="card-subtitle">お知らせ</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="announcement-item high">
          <div class="announcement-header"><div style="flex:1"><div class="announcement-tags"><span class="status-pill" style="border-color:#BBF7D0;background:#DCFCE7;color:#166534">アップデート</span><span class="status-pill status-err">重要</span><span class="unread-badge">未読</span></div><div class="announcement-title" style="font-weight:900">サービス開始のお知らせ</div><div class="announcement-date">2026/2/20</div></div><i class="fas fa-chevron-up" style="color:var(--text-muted)"></i></div>
          <div class="announcement-body"><div class="announcement-body-text">KING and QUEENのサービスを正式にリリースしました。海外FXの取引でKQトークンが貯まる新しい体験をお楽しみください。</div></div>
        </div>
        <div class="announcement-item">
          <div class="announcement-header"><div style="flex:1"><div class="announcement-tags"><span class="status-pill" style="border-color:#FDE68A;background:#FEF3C7;color:#92400E">メンテナンス</span><span class="unread-badge">未読</span></div><div class="announcement-title" style="font-weight:900">メンテナンスのお知らせ</div><div class="announcement-date">2026/2/22</div></div><i class="fas fa-chevron-down" style="color:var(--text-muted)"></i></div>
          <div class="announcement-body" style="display:none"><div class="announcement-body-text">2月25日 0:00〜6:00 にシステムメンテナンスを実施します。</div></div>
        </div>
        <div class="announcement-item">
          <div class="announcement-header"><div style="flex:1"><div class="announcement-tags"><span class="status-pill status-info">キャンペーン</span><span class="unread-badge">未読</span></div><div class="announcement-title" style="font-weight:900">KQトークン付与率UPキャンペーン</div><div class="announcement-date">2026/2/23</div></div><i class="fas fa-chevron-down" style="color:var(--text-muted)"></i></div>
          <div class="announcement-body" style="display:none"><div class="announcement-body-text">3月1日〜3月31日の期間中、全ブローカーのKQトークン付与率が1.5倍になります。</div></div>
        </div>
        <div class="announcement-item">
          <div class="announcement-header"><div style="flex:1"><div class="announcement-tags"><span class="status-pill" style="border-color:#BBF7D0;background:#DCFCE7;color:#166534">アップデート</span><span class="unread-badge">未読</span></div><div class="announcement-title" style="font-weight:900">ランクシステムについて</div><div class="announcement-date">2026/2/24</div></div><i class="fas fa-chevron-down" style="color:var(--text-muted)"></i></div>
          <div class="announcement-body" style="display:none"><div class="announcement-body-text">Member / Silver / Gold の3段階のランクシステムを導入しました。</div></div>
        </div>
        <div class="announcement-item">
          <div class="announcement-header"><div style="flex:1"><div class="announcement-tags"><span class="status-pill status-neutral">その他</span><span class="unread-badge">未読</span></div><div class="announcement-title" style="font-weight:900">セキュリティアップデート</div><div class="announcement-date">2026/2/25</div></div><i class="fas fa-chevron-down" style="color:var(--text-muted)"></i></div>
          <div class="announcement-body" style="display:none"><div class="announcement-body-text">二段階認証の強化を行いました。</div></div>
        </div>
      </div>
      <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:16px">
        <div style="width:32px;height:32px;border:1px solid var(--border);border-radius:2px;display:flex;align-items:center;justify-content:center"><i class="fas fa-chevron-left" style="color:#D1D5DB;font-size:12px"></i></div>
        <span style="font-weight:900;color:var(--text-primary);font-size:13px">1 / 2</span>
        <div style="width:32px;height:32px;border:1px solid var(--border);border-radius:2px;display:flex;align-items:center;justify-content:center"><i class="fas fa-chevron-right" style="color:#374151;font-size:12px"></i></div>
      </div>
    </div>
  </div>

  <!-- Menu -->
  <div class="page hidden" data-page="menu">
    <div class="card" style="padding:0;overflow:hidden">
      <div class="menu-list">
        <div class="menu-list-item"><i class="fas fa-user"></i><span>プロフィール</span><i class="fas fa-chevron-right menu-arrow"></i></div>
        <div class="menu-list-item"><i class="fas fa-wallet"></i><span>ウォレット</span><i class="fas fa-chevron-right menu-arrow"></i></div>
        <div class="menu-list-item"><i class="fas fa-money-check-alt"></i><span>出金</span><i class="fas fa-chevron-right menu-arrow"></i></div>
        <div class="menu-list-item"><i class="fas fa-gift"></i><span>付与履歴</span><i class="fas fa-chevron-right menu-arrow"></i></div>
        <div class="menu-list-item"><i class="fas fa-crown"></i><span>ランク</span><i class="fas fa-chevron-right menu-arrow"></i></div>
        <div class="menu-list-item"><i class="fas fa-cog"></i><span>設定</span><i class="fas fa-chevron-right menu-arrow"></i></div>
      </div>
    </div>
    <div class="card">
      <div class="card-subtitle">アカウント</div>
      <div class="kv-row" style="margin-bottom:8px"><span class="kv-key">ログイン中</span><span class="kv-value">user@example.com</span></div>
      <button class="btn-secondary" style="border-color:#FECACA"><i class="fas fa-sign-out-alt" style="color:#991B1B"></i><span style="color:#991B1B;margin-left:8px">サインアウト</span></button>
    </div>
  </div>

  <!-- Profile -->
  <div class="page hidden" data-page="profile">
    <div class="card">
      <div class="card-subtitle">プロフィール情報</div>
      <div class="kv-row"><span class="kv-key">メールアドレス</span><span class="kv-value">user@example.com</span></div>
      <div class="kv-row"><span class="kv-key">ランク</span><span class="kv-value" style="display:flex;align-items:center;gap:6px"><i class="fas fa-shield-alt" style="color:#92400E;font-size:12px"></i> <span style="color:#92400E">Member</span></span></div>
      <div class="kv-row"><span class="kv-key">アカウント状態</span><span class="status-pill status-ok">アクティブ</span></div>
      <div class="kv-row"><span class="kv-key">KYC状態</span><span class="status-pill status-ok">承認済み</span></div>
      <button class="btn-secondary" style="margin-top:8px">KYC詳細を確認</button>
    </div>
    <button class="btn-secondary"><i class="fas fa-chevron-left" style="font-size:12px"></i> メニューに戻る</button>
  </div>

  <!-- Wallet -->
  <div class="page hidden" data-page="wallet">
    <div class="card">
      <div class="card-subtitle">ウォレット管理</div>
      <div class="kv-row"><span class="kv-key">接続状態</span><span style="display:flex;align-items:center;gap:8px"><span class="wallet-dot on"></span><span class="kv-value" style="color:#16A34A">Wallet Connected</span></span></div>
      <div class="kv-row"><span class="kv-key">アドレス</span><span class="kv-value" style="font-family:monospace;font-size:12px">IZAKA-YA...8f2a</span></div>
      <div class="kv-row"><span class="kv-key">ネットワーク</span><span class="kv-value">Polygon</span></div>
      <button class="btn-secondary" style="margin-top:8px">切断</button>
    </div>
    <button class="btn-secondary"><i class="fas fa-chevron-left" style="font-size:12px"></i> メニューに戻る</button>
  </div>

  <!-- Reward History -->
  <div class="page hidden" data-page="rewardHistory">
    <div class="card">
      <div class="card-subtitle">付与履歴</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="app-item"><div style="flex:1"><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><span class="status-pill" style="border-color:#BBF7D0;background:#DCFCE7;color:#166534">付与</span><span style="color:var(--text-muted);font-weight:700;font-size:11px">2026/3/1</span></div><div style="font-weight:900;color:var(--text-primary);font-size:14px">+1,200 <span style="font-size:11px;color:var(--text-secondary)">KQ</span> / +0.005 <span style="font-size:11px;color:var(--text-secondary)">BTC</span> / +0.08 <span style="font-size:11px;color:var(--text-secondary)">ETH</span></div><div style="color:var(--text-muted);font-weight:700;font-size:10px;margin-top:2px">参照: BATCH-2026-03</div></div></div>
        <div class="app-item"><div style="flex:1"><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><span class="status-pill" style="border-color:#BBF7D0;background:#DCFCE7;color:#166534">付与</span><span style="color:var(--text-muted);font-weight:700;font-size:11px">2026/2/1</span></div><div style="font-weight:900;color:var(--text-primary);font-size:14px">+800 <span style="font-size:11px;color:var(--text-secondary)">KQ</span> / +100 <span style="font-size:11px;color:var(--text-secondary)">USDT</span> / +50 <span style="font-size:11px;color:var(--text-secondary)">USDC</span></div><div style="color:var(--text-muted);font-weight:700;font-size:10px;margin-top:2px">参照: BATCH-2026-02</div></div></div>
        <div class="app-item"><div style="flex:1"><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><span class="status-pill status-neutral">出金</span><span style="color:var(--text-muted);font-weight:700;font-size:11px">2026/2/15</span></div><div style="font-weight:900;color:var(--text-primary);font-size:14px">-200 <span style="font-size:11px;color:var(--text-secondary)">USDT</span></div><div style="color:var(--text-muted);font-weight:700;font-size:10px;margin-top:2px">参照: WITHDRAW-001</div></div></div>
        <div class="app-item"><div style="flex:1"><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><span class="status-pill status-info">調整</span><span style="color:var(--text-muted);font-weight:700;font-size:11px">2026/1/20</span></div><div style="font-weight:900;color:var(--text-primary);font-size:14px">+5,000 <span style="font-size:11px;color:var(--text-secondary)">JPYR</span></div><div style="color:var(--text-muted);font-weight:700;font-size:10px;margin-top:2px">参照: ADJ-001</div></div></div>
        <div class="app-item"><div style="flex:1"><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><span class="status-pill" style="border-color:#BBF7D0;background:#DCFCE7;color:#166534">付与</span><span style="color:var(--text-muted);font-weight:700;font-size:11px">2026/1/1</span></div><div style="font-weight:900;color:var(--text-primary);font-size:14px">+500 <span style="font-size:11px;color:var(--text-secondary)">KQ</span> / +300 <span style="font-size:11px;color:var(--text-secondary)">IZAKAYA</span> / +3,000 <span style="font-size:11px;color:var(--text-secondary)">JPYC</span></div><div style="color:var(--text-muted);font-weight:700;font-size:10px;margin-top:2px">参照: BATCH-2026-01</div></div></div>
      </div>
    </div>
    <button class="btn-secondary"><i class="fas fa-chevron-left" style="font-size:12px"></i> メニューに戻る</button>
  </div>

  <!-- Rank (from menu) -->
  <div class="page hidden" data-page="menuRank">
    <div class="card">
      <div class="card-subtitle">ランク詳細</div>
      <div class="rank-card" style="border-color:rgba(146,64,14,0.55)">
        <div class="rank-card-header"><div class="rank-shield" style="background:#92400E"><i class="fas fa-shield-alt"></i></div><div><div class="rank-card-name" style="color:#92400E">Member</div></div></div>
        <div class="rank-benefit-row">
          <div class="rank-benefit-card" style="background:rgba(146,64,14,0.18)"><i class="fas fa-bolt" style="color:#92400E"></i><div class="rank-benefit-label">還元率倍率</div><div class="rank-benefit-value" style="color:#92400E">x1.00</div></div>
          <div class="rank-benefit-card" style="background:rgba(146,64,14,0.18)"><i class="fas fa-percentage" style="color:#92400E"></i><div class="rank-benefit-label">手数料優遇</div><div class="rank-benefit-value" style="color:#92400E">優遇なし</div></div>
        </div>
        <div style="margin-top:8px"><div class="apply-label">昇格条件（LEV_USD）</div><div class="kv-row"><span class="kv-key">現在のランク基準</span><span class="kv-value">$0</span></div><div class="kv-row"><span class="kv-key">次のランク（Silver）</span><span class="kv-value">$50,000</span></div></div>
        <div style="margin-top:8px"><div class="kv-row"><span class="kv-key">累計獲得ポイント</span><span class="kv-value">4,200 pt</span></div></div>
        <div style="margin-top:8px"><div class="apply-label">次ランクまでの進捗</div><div class="rank-progress-track"><div class="rank-progress-fill" style="width:42%;background:#92400E"></div></div><div class="rank-progress-labels"><span class="rank-progress-label-text">4,200 / 10,000 pt</span><span class="rank-progress-label-text">42%</span></div></div>
      </div>
      <div class="apply-label" style="margin-top:16px">ランク一覧</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div class="app-item" style="border-color:rgba(146,64,14,0.55);border-width:2px"><div class="rank-shield" style="background:#92400E;width:36px;height:36px;flex-shrink:0"><i class="fas fa-shield-alt" style="font-size:14px"></i></div><div style="flex:1"><div style="font-weight:900;color:#92400E">Member (現在)</div><div style="color:var(--text-secondary);font-weight:700;font-size:11px;margin-top:2px">倍率: x1.00 | 優遇なし | LEV_USD: $0</div></div></div>
        <div class="app-item"><div class="rank-shield" style="background:#C0C0C0;width:36px;height:36px;flex-shrink:0"><i class="fas fa-gem" style="font-size:14px;color:#111827"></i></div><div style="flex:1"><div style="font-weight:900;color:#9CA3AF">Silver</div><div style="color:var(--text-secondary);font-weight:700;font-size:11px;margin-top:2px">倍率: x1.20 | 手数料 -25% | LEV_USD: $50,000</div></div></div>
        <div class="app-item"><div class="rank-shield" style="background:#D97706;width:36px;height:36px;flex-shrink:0"><i class="fas fa-crown" style="font-size:14px"></i></div><div style="flex:1"><div style="font-weight:900;color:#D97706">Gold</div><div style="color:var(--text-secondary);font-weight:700;font-size:11px;margin-top:2px">倍率: x1.50 | 手数料 -50% | LEV_USD: $200,000</div></div></div>
      </div>
      <div class="notice-subtle" style="margin-top:12px"><i class="fas fa-info-circle" style="color:var(--text-secondary)"></i><span class="notice-subtle-text">ランクは毎月自動で判定されます。条件達成後、翌月に反映されます</span></div>
    </div>
    <button class="btn-secondary"><i class="fas fa-chevron-left" style="font-size:12px"></i> メニューに戻る</button>
  </div>

  <!-- Account Settings -->
  <div class="page hidden" data-page="accountSettings">
    <div class="card">
      <div class="card-subtitle">メールアドレスを変更</div>
      <div class="kv-row"><span class="kv-key">現在のメール</span><span class="kv-value">user@example.com</span></div>
      <div class="apply-label" style="margin-top:12px">新しいメールアドレス</div>
      <input class="text-field" placeholder="new@example.com">
      <button class="btn-primary" style="margin-top:16px">メールアドレスを変更</button>
    </div>
    <div class="card">
      <div class="card-subtitle">パスワードを変更</div>
      <div class="apply-label">現在のパスワード</div>
      <input class="text-field" type="password" placeholder="••••••••">
      <div style="height:12px"></div>
      <div class="apply-label">新しいパスワード</div>
      <input class="text-field" type="password" placeholder="••••••••">
      <div style="height:12px"></div>
      <div class="apply-label">新しいパスワード（確認）</div>
      <input class="text-field" type="password" placeholder="••••••••">
      <button class="btn-primary" style="margin-top:16px">パスワードを変更</button>
    </div>
    <div class="card">
      <div class="card-subtitle">退会</div>
      <div class="warning-banner danger"><i class="fas fa-exclamation-triangle" style="color:#991B1B;font-size:16px;margin-top:2px"></i><div><div class="warning-title" style="color:#991B1B">退会に関する注意</div><div class="warning-text" style="color:#991B1B">退会すると全てのデータが失われます。残高がある場合は先に出金してください。</div></div></div>
      <button class="btn-secondary" style="border-color:#FECACA"><i class="fas fa-trash-alt" style="color:#991B1B"></i><span style="color:#991B1B">退会を申請する</span></button>
    </div>
    <button class="btn-secondary"><i class="fas fa-chevron-left" style="font-size:12px"></i> メニューに戻る</button>
  </div>

  <!-- KYC Screen -->
  <div class="page hidden" data-page="kyc">
    <div class="card">
      <div class="card-subtitle">本人確認（KYC）</div>
      <div class="kyc-body"></div>
    </div>
    <button class="btn-secondary"><i class="fas fa-chevron-left" style="font-size:12px"></i> メニューに戻る</button>
  </div>

  <!-- Payout Screen -->
  <div class="page hidden" data-page="payout">
    <div class="card payout-form-section">
      <div class="card-subtitle">出金申請</div>
      <div class="apply-label" style="margin-top:4px">アセット</div>
      <div class="choice-row" style="flex-wrap:wrap">
        <div class="choice-chip on">KQ</div><div class="choice-chip">BTC</div><div class="choice-chip">ETH</div><div class="choice-chip">USDT</div><div class="choice-chip">XRP</div><div class="choice-chip">USDC</div><div class="choice-chip">JPYR</div><div class="choice-chip">JPYC</div><div class="choice-chip">IZAKAYA</div>
      </div>
      <div class="mini-hint" style="margin-top:8px">出金可能残高: <span>9,999 KQ</span></div>
      <div class="kv-row" style="margin-top:8px"><span class="kv-key">KYC状態</span><span class="status-pill status-ok">承認済み</span></div>
      <div class="kv-row"><span class="kv-key">送金先</span><span class="kv-value" style="font-family:monospace;font-size:12px">IZAKA-YA...8f2a</span></div>
      <div class="apply-label" style="margin-top:12px">出金額</div>
      <input class="text-field" placeholder="0">
      <div class="check-row" style="margin-top:12px"><div class="checkbox"></div><span style="font-size:13px;font-weight:700;color:#374151">利用規約に同意して申請する</span></div>
      <button class="btn-primary" style="margin-top:14px"><i class="fas fa-paper-plane"></i><span>申請を実行する</span></button>
    </div>
    <div class="card payout-history-section" style="display:none">
      <div class="card-subtitle">出金申請の履歴</div>
      <div class="choice-row payout-state-chips" style="margin-bottom:12px">
        <div class="choice-chip on">完了</div><div class="choice-chip">申請中</div><div class="choice-chip">承認済み</div><div class="choice-chip">処理中</div><div class="choice-chip">却下</div><div class="choice-chip">失敗</div><div class="choice-chip">キャンセル</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <!-- COMPLETED -->
        <div class="payout-card payout-state-item" data-payout-state="completed">
          <div style="display:flex;justify-content:space-between;align-items:center"><div style="font-weight:900;color:var(--text-primary);font-size:16px">500 <span style="font-size:12px;color:var(--text-secondary)">USDT</span></div><span class="status-pill status-ok">完了</span></div>
          <div style="color:var(--text-muted);font-weight:700;font-size:11px;margin-top:4px">2026/2/10 10:00:00</div>
          <div class="payout-stepper"><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">申請中</div></div><div class="payout-connector done"></div><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">承認済み</div></div><div class="payout-connector done"></div><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">処理中</div></div><div class="payout-connector done"></div><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">送金完了</div></div></div>
          <div style="margin-top:4px"><span style="color:var(--text-secondary);font-weight:700;font-size:10px">TxHash:</span><br><span style="color:#374151;font-weight:700;font-size:10px;font-family:monospace">0x9f8e7d6c5b4a3928...c2b1a0</span></div>
        </div>
        <!-- PENDING -->
        <div class="payout-card payout-state-item" data-payout-state="pending" style="display:none">
          <div style="display:flex;justify-content:space-between;align-items:center"><div style="font-weight:900;color:var(--text-primary);font-size:16px">0.02 <span style="font-size:12px;color:var(--text-secondary)">BTC</span></div><span class="status-pill status-warn">申請中</span></div>
          <div style="color:var(--text-muted);font-weight:700;font-size:11px;margin-top:4px">2026/2/21 14:30:00</div>
          <div class="payout-stepper"><div class="payout-step"><div class="payout-step-circle active" style="background:#FEF3C7;border-color:#F59E0B;color:#F59E0B">1</div><div class="payout-step-label active">申請中</div></div><div class="payout-connector"></div><div class="payout-step"><div class="payout-step-circle">2</div><div class="payout-step-label">承認済み</div></div><div class="payout-connector"></div><div class="payout-step"><div class="payout-step-circle">3</div><div class="payout-step-label">処理中</div></div><div class="payout-connector"></div><div class="payout-step"><div class="payout-step-circle">4</div><div class="payout-step-label">送金完了</div></div></div>
          <button class="btn-secondary" style="margin-top:8px;border-color:#FECACA"><span style="color:#991B1B;font-size:12px">キャンセル</span></button>
        </div>
        <!-- APPROVED -->
        <div class="payout-card payout-state-item" data-payout-state="approved" style="display:none">
          <div style="display:flex;justify-content:space-between;align-items:center"><div style="font-weight:900;color:var(--text-primary);font-size:16px">0.5 <span style="font-size:12px;color:var(--text-secondary)">ETH</span></div><span class="status-pill" style="border-color:#BFDBFE;background:#DBEAFE;color:#1E40AF">承認済み</span></div>
          <div style="color:var(--text-muted);font-weight:700;font-size:11px;margin-top:4px">2026/2/25 09:15:00</div>
          <div class="payout-stepper"><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">申請中</div></div><div class="payout-connector done"></div><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">承認済み</div></div><div class="payout-connector"></div><div class="payout-step"><div class="payout-step-circle">3</div><div class="payout-step-label">処理中</div></div><div class="payout-connector"></div><div class="payout-step"><div class="payout-step-circle">4</div><div class="payout-step-label">送金完了</div></div></div>
        </div>
        <!-- PROCESSING -->
        <div class="payout-card payout-state-item" data-payout-state="processing" style="display:none">
          <div style="display:flex;justify-content:space-between;align-items:center"><div style="font-weight:900;color:var(--text-primary);font-size:16px">1,200 <span style="font-size:12px;color:var(--text-secondary)">KQ</span></div><span class="status-pill" style="border-color:#BFDBFE;background:#DBEAFE;color:#1E40AF">処理中</span></div>
          <div style="color:var(--text-muted);font-weight:700;font-size:11px;margin-top:4px">2026/2/28 11:00:00</div>
          <div class="payout-stepper"><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">申請中</div></div><div class="payout-connector done"></div><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">承認済み</div></div><div class="payout-connector done"></div><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">処理中</div></div><div class="payout-connector"></div><div class="payout-step"><div class="payout-step-circle">4</div><div class="payout-step-label">送金完了</div></div></div>
        </div>
        <!-- REJECTED -->
        <div class="payout-card payout-state-item" data-payout-state="rejected" style="display:none;border-left-color:#EF4444">
          <div style="display:flex;justify-content:space-between;align-items:center"><div style="font-weight:900;color:var(--text-primary);font-size:16px">100 <span style="font-size:12px;color:var(--text-secondary)">XRP</span></div><span class="status-pill" style="border-color:#FECACA;background:#FEE2E2;color:#991B1B">却下</span></div>
          <div style="color:var(--text-muted);font-weight:700;font-size:11px;margin-top:4px">2026/1/20 16:00:00</div>
          <div class="payout-stepper"><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">申請中</div></div><div class="payout-connector"></div><div class="payout-step"><div class="payout-step-circle fail"><i class="fas fa-times" style="font-size:11px"></i></div><div class="payout-step-label fail">却下</div></div><div class="payout-connector"></div><div class="payout-step"><div class="payout-step-circle">—</div><div class="payout-step-label">処理中</div></div><div class="payout-connector"></div><div class="payout-step"><div class="payout-step-circle">—</div><div class="payout-step-label">送金完了</div></div></div>
          <div style="margin-top:4px;padding:8px;background:#FEF2F2;border-radius:2px"><div style="font-weight:900;color:#991B1B;font-size:11px"><i class="fas fa-exclamation-triangle" style="margin-right:4px"></i>却下理由</div><div style="color:#7F1D1D;font-weight:700;font-size:11px;margin-top:2px">出金先アドレスが確認できませんでした</div></div>
          <div style="color:#16A34A;font-weight:700;font-size:10px;margin-top:6px"><i class="fas fa-undo" style="margin-right:4px"></i>残高復帰済み: +100 XRP</div>
        </div>
        <!-- FAILED -->
        <div class="payout-card payout-state-item" data-payout-state="failed" style="display:none;border-left-color:#EF4444">
          <div style="display:flex;justify-content:space-between;align-items:center"><div style="font-weight:900;color:var(--text-primary);font-size:16px">800 <span style="font-size:12px;color:var(--text-secondary)">USDT</span></div><span class="status-pill" style="border-color:#FECACA;background:#FEE2E2;color:#991B1B">失敗</span></div>
          <div style="color:var(--text-muted);font-weight:700;font-size:11px;margin-top:4px">2026/1/15 08:30:00</div>
          <div class="payout-stepper"><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">申請中</div></div><div class="payout-connector done"></div><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">承認済み</div></div><div class="payout-connector done"></div><div class="payout-step"><div class="payout-step-circle done"><i class="fas fa-check" style="font-size:11px"></i></div><div class="payout-step-label done">処理中</div></div><div class="payout-connector"></div><div class="payout-step"><div class="payout-step-circle fail"><i class="fas fa-times" style="font-size:11px"></i></div><div class="payout-step-label fail">失敗</div></div></div>
          <div style="margin-top:4px"><span style="color:var(--text-secondary);font-weight:700;font-size:10px">TxHash:</span><br><span style="color:#374151;font-weight:700;font-size:10px;font-family:monospace">0xa1b2c3d4e5f67890...failed</span></div>
          <div style="margin-top:4px;padding:8px;background:#FEF2F2;border-radius:2px"><div style="font-weight:900;color:#991B1B;font-size:11px"><i class="fas fa-exclamation-triangle" style="margin-right:4px"></i>失敗理由</div><div style="color:#7F1D1D;font-weight:700;font-size:11px;margin-top:2px">ネットワークエラーにより送金が失敗しました</div></div>
          <div style="color:#16A34A;font-weight:700;font-size:10px;margin-top:6px"><i class="fas fa-undo" style="margin-right:4px"></i>残高復帰済み: +800 USDT</div>
        </div>
        <!-- CANCELLED -->
        <div class="payout-card payout-state-item" data-payout-state="cancelled" style="display:none;border-left-color:#9CA3AF">
          <div style="display:flex;justify-content:space-between;align-items:center"><div style="font-weight:900;color:var(--text-muted);font-size:16px;text-decoration:line-through">3,000 <span style="font-size:12px">KQ</span></div><span class="status-pill status-neutral">キャンセル済み</span></div>
          <div style="color:var(--text-muted);font-weight:700;font-size:11px;margin-top:4px">2026/1/10 12:00:00</div>
          <div style="color:#16A34A;font-weight:700;font-size:10px;margin-top:6px"><i class="fas fa-undo" style="margin-right:4px"></i>残高復帰済み: +3,000 KQ</div>
        </div>
      </div>
      <button class="btn-secondary" style="margin-top:12px"><i class="fas fa-plus" style="font-size:12px;margin-right:4px"></i>新規申請</button>
    </div>
    <button class="btn-secondary"><i class="fas fa-chevron-left" style="font-size:12px"></i> メニューに戻る</button>
  </div>

  <!-- History Screen -->
  <div class="page hidden" data-page="history">
    <div class="card">
      <div class="card-subtitle">入出金履歴（デモ）</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <div class="history-item"><div style="flex:1"><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><span style="color:var(--text-muted);font-weight:700;font-size:12px">2024/11/10</span><span class="history-tag in">入金</span></div><div style="font-weight:700;color:var(--text-primary);font-size:14px">10月分 エアドロップ報酬</div></div><div style="font-weight:900;color:#16A34A;font-size:16px">+ 1,000 <span style="font-size:11px;color:var(--text-muted)">KQ</span></div></div>
        <div class="history-item"><div style="flex:1"><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><span style="color:var(--text-muted);font-weight:700;font-size:12px">2024/11/05</span><span class="history-tag out">出金</span></div><div style="font-weight:700;color:var(--text-primary);font-size:14px">ウォレット送金申請</div></div><div style="font-weight:900;color:#991B1B;font-size:16px">- 5,000 <span style="font-size:11px;color:var(--text-muted)">KQ</span></div></div>
      </div>
    </div>
  </div>

</div>

<!-- Bottom Navigation -->
<div class="bottom-nav" data-part="nav" style="display:none">
  <div class="tab-item active" data-tab="dashboard"><i class="fas fa-home"></i><span>ホーム</span></div>
  <div class="tab-item" data-tab="onboarding"><i class="fas fa-route"></i><span>口座開設</span></div>
  <div class="tab-item" data-tab="menu"><i class="fas fa-bars"></i><span>メニュー</span></div>
</div>

<!-- Home indicator -->
<div style="height:8px;display:flex;justify-content:center;align-items:center;background:var(--white)">
  <div style="width:134px;height:5px;border-radius:3px;background:#1F2937"></div>
</div>
`;

// ---------- KYC State HTML generators ----------
function getKycHtml(state) {
  const stepper = (s1, s2, s3) => `
    <div class="kyc-stepper">
      <div class="kyc-step"><div class="kyc-step-circle ${s1.cls}">${s1.icon}</div><div class="kyc-step-label" style="color:${s1.color}">書類提出</div></div>
      <div class="kyc-connector ${s1.cls === 'done' ? 'done' : ''}"></div>
      <div class="kyc-step"><div class="kyc-step-circle ${s2.cls}">${s2.icon}</div><div class="kyc-step-label" style="color:${s2.color}">審査中</div></div>
      <div class="kyc-connector ${s2.cls === 'done' ? 'done' : ''}"></div>
      <div class="kyc-step"><div class="kyc-step-circle ${s3.cls}">${s3.icon}</div><div class="kyc-step-label" style="color:${s3.color}">完了</div></div>
    </div>`;
  const chk = {cls:'done', icon:'<i class="fas fa-check" style="font-size:11px"></i>', color:'#16A34A'};
  const act = {cls:'active', icon:'<i class="fas fa-spinner" style="font-size:11px"></i>', color:'#F59E0B'};
  const off = {cls:'', icon:'—', color:'var(--text-muted)'};
  const fail = {cls:'fail', icon:'<i class="fas fa-times" style="font-size:11px"></i>', color:'#EF4444'};

  if (state === 'none') {
    return `
      <div class="kyc-status-icon"><div class="kyc-icon-circle" style="background:#F3F4F6"><i class="fas fa-id-card" style="color:#9CA3AF;font-size:28px"></i></div><div style="font-weight:900;color:var(--text-primary);font-size:16px;margin-top:16px;text-align:center">本人確認が未完了です</div><div style="color:var(--text-secondary);font-weight:700;margin-top:8px;text-align:center;line-height:20px">出金するにはKYC認証が必要です。</div></div>
      ${stepper(off, off, off)}
      <div class="card" style="margin-top:12px;border:1px dashed #D1D5DB"><div class="card-subtitle">書類を提出する</div><div class="apply-label" style="margin-top:8px">書類種別</div><div class="choice-row"><div class="choice-chip on">運転免許証</div><div class="choice-chip">パスポート</div><div class="choice-chip">マイナンバー</div></div><div style="margin-top:12px;padding:24px;border:2px dashed #D1D5DB;border-radius:2px;text-align:center"><i class="fas fa-cloud-upload-alt" style="font-size:24px;color:#9CA3AF"></i><div style="font-weight:700;color:var(--text-muted);font-size:12px;margin-top:8px">書類をアップロード</div><div style="font-weight:700;color:var(--text-muted);font-size:10px;margin-top:4px">JPG / PNG / PDF（最大5MB）</div></div><button class="btn-primary" style="margin-top:12px"><i class="fas fa-paper-plane"></i><span>提出する</span></button></div>`;
  } else if (state === 'pending') {
    return `
      <div class="kyc-status-icon"><div class="kyc-icon-circle" style="background:#FEF3C7"><i class="fas fa-clock" style="color:#F59E0B;font-size:28px"></i></div><div style="font-weight:900;color:var(--text-primary);font-size:16px;margin-top:16px;text-align:center">審査中です</div><div style="color:var(--text-secondary);font-weight:700;margin-top:8px;text-align:center;line-height:20px">書類を確認しています。しばらくお待ちください。</div></div>
      ${stepper(chk, act, off)}
      <div style="margin-top:12px"><div class="kv-row"><span class="kv-key">提出日</span><span class="kv-value">2026/02/18</span></div><div class="kv-row"><span class="kv-key">書類種別</span><span class="kv-value">運転免許証</span></div></div>`;
  } else if (state === 'approved') {
    return `
      <div class="kyc-status-icon"><div class="kyc-icon-circle" style="background:#DCFCE7"><i class="fas fa-check-circle" style="color:#16A34A;font-size:28px"></i></div><div style="font-weight:900;color:var(--text-primary);font-size:16px;margin-top:16px;text-align:center">本人確認が完了しました</div><div style="color:var(--text-secondary);font-weight:700;margin-top:8px;text-align:center;line-height:20px">KYCが承認されました。全ての機能をご利用いただけます。</div></div>
      ${stepper(chk, chk, chk)}
      <div style="margin-top:12px"><div class="kv-row"><span class="kv-key">認証日</span><span class="kv-value">2026/02/20</span></div><div class="kv-row"><span class="kv-key">書類種別</span><span class="kv-value">運転免許証</span></div></div>`;
  } else if (state === 'rejected') {
    return `
      <div class="kyc-status-icon"><div class="kyc-icon-circle" style="background:#FEE2E2"><i class="fas fa-times-circle" style="color:#EF4444;font-size:28px"></i></div><div style="font-weight:900;color:var(--text-primary);font-size:16px;margin-top:16px;text-align:center">本人確認が却下されました</div><div style="color:var(--text-secondary);font-weight:700;margin-top:8px;text-align:center;line-height:20px">書類を確認の上、再提出してください。</div></div>
      ${stepper(chk, fail, off)}
      <div style="margin-top:12px;padding:10px;background:#FEF2F2;border-radius:2px"><div style="font-weight:900;color:#991B1B;font-size:12px"><i class="fas fa-exclamation-triangle" style="margin-right:4px"></i>却下理由</div><div style="color:#7F1D1D;font-weight:700;font-size:12px;margin-top:4px">書類の画像が不鮮明です。鮮明な画像で再提出してください。</div></div>
      <div style="margin-top:12px"><div class="kv-row"><span class="kv-key">提出日</span><span class="kv-value">2026/02/15</span></div><div class="kv-row"><span class="kv-key">却下日</span><span class="kv-value">2026/02/17</span></div><div class="kv-row"><span class="kv-key">書類種別</span><span class="kv-value">運転免許証</span></div></div>
      <button class="btn-primary" style="margin-top:12px"><i class="fas fa-redo"></i><span>再提出する</span></button>`;
  }
  return '';
}

// ---------- Screen Configuration ----------
const SCREEN_CONFIGS = [
  // Auth screens
  { id: 'auth-login', labelJa: 'Login (ログイン)', labelEn: 'Login', type: 'auth', screen: 'auth', setup: (root) => {
    root.querySelector('[data-tab="signin"]').classList.add('active');
    root.querySelector('[data-tab="signup"]').classList.remove('active');
  }},
  { id: 'auth-signup', labelJa: 'Sign Up (アカウント作成)', labelEn: 'Sign Up', type: 'auth', screen: 'auth', setup: (root) => {
    root.querySelector('[data-tab="signin"]').classList.remove('active');
    root.querySelector('[data-tab="signup"]').classList.add('active');
    root.querySelector('.signup-fields').style.display = 'block';
    root.querySelector('.auth-btn-text').textContent = 'アカウントを作成';
    root.querySelector('.auth-subtitle').textContent = '新規アカウント作成';
    root.querySelector('.auth-forgot-link').style.display = 'none';
    root.querySelector('.auth-existing-link').style.display = 'block';
  }},
  { id: 'forgot-password', labelJa: 'Forgot Password (パスワード忘れ)', labelEn: 'Forgot Password', type: 'auth', screen: 'forgot' },
  { id: 'reset-sent', labelJa: 'Reset Email Sent (リセットメール送信)', labelEn: 'Reset Email Sent', type: 'auth', screen: 'reset-sent' },

  // Main app screens
  { id: 'dashboard', labelJa: 'Dashboard - Member (ダッシュボード)', labelEn: 'Dashboard - Member', type: 'app', page: 'dashboard', tab: 'dashboard' },
  { id: 'dashboard-silver', labelJa: 'Dashboard - Silver (ダッシュボード)', labelEn: 'Dashboard - Silver', type: 'app', page: 'dashboard', tab: 'dashboard', rank: 'silver' },
  { id: 'dashboard-gold', labelJa: 'Dashboard - Gold (ダッシュボード)', labelEn: 'Dashboard - Gold', type: 'app', page: 'dashboard', tab: 'dashboard', rank: 'gold' },
  { id: 'onboarding', labelJa: 'Onboarding (口座開設・申請)', labelEn: 'Onboarding', type: 'app', page: 'onboarding', tab: 'onboarding' },
  { id: 'broker-picker', labelJa: 'Broker Picker (口座を追加)', labelEn: 'Broker Picker', type: 'app', page: 'brokerPicker', tab: 'onboarding' },
  { id: 'broker-open', labelJa: 'Broker Open (口座開設)', labelEn: 'Broker Open', type: 'app', page: 'brokerOpen', tab: 'onboarding' },
  { id: 'notifications', labelJa: 'Notifications (通知)', labelEn: 'Notifications', type: 'app', page: 'notifications', tab: 'onboarding' },
  { id: 'announcements', labelJa: 'Announcements (お知らせ)', labelEn: 'Announcements', type: 'app', page: 'announcements', tab: 'dashboard' },
  { id: 'menu', labelJa: 'Menu (メニュー)', labelEn: 'Menu', type: 'app', page: 'menu', tab: 'menu' },
  { id: 'profile', labelJa: 'Profile (プロフィール)', labelEn: 'Profile', type: 'app', page: 'profile', tab: 'menu' },
  { id: 'wallet', labelJa: 'Wallet (ウォレット)', labelEn: 'Wallet', type: 'app', page: 'wallet', tab: 'menu' },
  { id: 'reward-history', labelJa: 'Reward History (付与履歴)', labelEn: 'Reward History', type: 'app', page: 'rewardHistory', tab: 'menu' },
  { id: 'rank-detail', labelJa: 'Rank Detail - Member (ランク詳細)', labelEn: 'Rank Detail - Member', type: 'app', page: 'menuRank', tab: 'menu' },
  { id: 'rank-detail-silver', labelJa: 'Rank Detail - Silver (ランク詳細)', labelEn: 'Rank Detail - Silver', type: 'app', page: 'menuRank', tab: 'menu', menuRankState: 'silver' },
  { id: 'rank-detail-gold', labelJa: 'Rank Detail - Gold (ランク詳細)', labelEn: 'Rank Detail - Gold', type: 'app', page: 'menuRank', tab: 'menu', menuRankState: 'gold' },
  { id: 'account-settings', labelJa: 'Account Settings (設定)', labelEn: 'Account Settings', type: 'app', page: 'accountSettings', tab: 'menu' },
  { id: 'history', labelJa: 'History (入出金履歴)', labelEn: 'History', type: 'app', page: 'history', tab: 'menu' },

  // KYC states
  { id: 'kyc-none', labelJa: 'KYC - Not Submitted (未提出)', labelEn: 'KYC - Not Submitted', type: 'app', page: 'kyc', tab: 'menu', kycState: 'none' },
  { id: 'kyc-pending', labelJa: 'KYC - Under Review (審査中)', labelEn: 'KYC - Under Review', type: 'app', page: 'kyc', tab: 'menu', kycState: 'pending' },
  { id: 'kyc-approved', labelJa: 'KYC - Approved (承認済み)', labelEn: 'KYC - Approved', type: 'app', page: 'kyc', tab: 'menu', kycState: 'approved' },
  { id: 'kyc-rejected', labelJa: 'KYC - Rejected (却下)', labelEn: 'KYC - Rejected', type: 'app', page: 'kyc', tab: 'menu', kycState: 'rejected' },

  // Payout states
  { id: 'payout-form', labelJa: 'Payout Form (出金申請)', labelEn: 'Payout Form', type: 'app', page: 'payout', tab: 'menu', payoutMode: 'form' },
  { id: 'payout-completed', labelJa: 'Payout - Completed (完了)', labelEn: 'Payout - Completed', type: 'app', page: 'payout', tab: 'menu', payoutMode: 'history', payoutState: 'completed' },
  { id: 'payout-pending', labelJa: 'Payout - Pending (申請中)', labelEn: 'Payout - Pending', type: 'app', page: 'payout', tab: 'menu', payoutMode: 'history', payoutState: 'pending' },
  { id: 'payout-approved', labelJa: 'Payout - Approved (承認済み)', labelEn: 'Payout - Approved', type: 'app', page: 'payout', tab: 'menu', payoutMode: 'history', payoutState: 'approved' },
  { id: 'payout-processing', labelJa: 'Payout - Processing (処理中)', labelEn: 'Payout - Processing', type: 'app', page: 'payout', tab: 'menu', payoutMode: 'history', payoutState: 'processing' },
  { id: 'payout-rejected', labelJa: 'Payout - Rejected (却下)', labelEn: 'Payout - Rejected', type: 'app', page: 'payout', tab: 'menu', payoutMode: 'history', payoutState: 'rejected' },
  { id: 'payout-failed', labelJa: 'Payout - Failed (失敗)', labelEn: 'Payout - Failed', type: 'app', page: 'payout', tab: 'menu', payoutMode: 'history', payoutState: 'failed' },
  { id: 'payout-cancelled', labelJa: 'Payout - Cancelled (キャンセル)', labelEn: 'Payout - Cancelled', type: 'app', page: 'payout', tab: 'menu', payoutMode: 'history', payoutState: 'cancelled' },
];


// ---------- Rank Variants for Dashboard ----------
function applyRankToDashboard(root, rank) {
  const configs = {
    silver: {
      name: 'Silver', icon: 'fa-gem', color: '#9CA3AF', bg: '#F3F4F6',
      accent: 'rgba(156,163,175,0.65)', accentSoft: 'rgba(156,163,175,0.22)',
      badgeBg: '#C0C0C0', badgeText: '#111827',
      pts: 16800, next: 'Gold', nextPts: 50000, basePts: 10000,
      rate: 'x1.20', fee: '手数料 -25%'
    },
    gold: {
      name: 'Gold', icon: 'fa-crown', color: '#D97706', bg: '#FFFBEB',
      accent: 'rgba(217,119,6,0.65)', accentSoft: 'rgba(217,119,6,0.22)',
      badgeBg: '#D97706', badgeText: '#fff',
      pts: 73500, next: null, nextPts: 50000, basePts: 50000,
      rate: 'x1.50', fee: '手数料 -50%'
    }
  };
  const c = configs[rank];
  if (!c) return;

  const tiers = ['bronze', 'silver', 'gold'];
  const tierIdx = tiers.indexOf(rank);
  const tierConfigs = {
    bronze: { color: '#92400E', bg: '#FEF3C7', icon: 'fa-shield-alt' },
    silver: { color: '#9CA3AF', bg: '#F3F4F6', icon: 'fa-gem' },
    gold: { color: '#D97706', bg: '#FFFBEB', icon: 'fa-crown' }
  };

  // Update tier nodes
  root.querySelectorAll('.tier-node-col').forEach((col, i) => {
    const node = col.querySelector('.tier-node');
    const label = col.querySelector('.tier-node-label');
    const icon = node.querySelector('i');
    const isReached = i <= tierIdx;
    const isActive = i === tierIdx;
    const tc = tierConfigs[tiers[i]];
    node.className = 'tier-node' + (isActive ? ' active' : '');
    node.style.borderColor = isActive ? tc.color : (isReached ? tc.color : '#D1D5DB');
    node.style.background = isActive ? tc.bg : 'var(--white)';
    icon.style.color = isReached ? tc.color : '#D1D5DB';
    label.style.color = isReached ? tc.color : 'var(--text-muted)';
    label.style.fontWeight = isActive ? '900' : '700';
  });

  // Update connectors
  root.querySelectorAll('.tier-connector').forEach((conn, i) => {
    conn.style.background = (i < tierIdx) ? tierConfigs[tiers[i + 1]].color : '#E5E7EB';
  });

  // Update rank card
  const card = root.querySelector('.rank-card');
  const badgeBg = c.badgeBg || c.color;
  const badgeText = c.badgeText || '#fff';
  const progress = c.next ? Math.round(((c.pts - c.basePts) / (c.nextPts - c.basePts)) * 100) : 100;
  const remain = c.next ? (c.nextPts - c.pts) : 0;

  card.style.borderColor = c.accent;
  card.querySelector('.rank-shield').style.background = badgeBg;
  card.querySelector('.rank-shield i').className = 'fas ' + c.icon;
  card.querySelector('.rank-shield i').style.color = badgeText;
  card.querySelector('.rank-card-name').style.color = c.color;
  card.querySelector('.rank-card-name').textContent = c.name;
  card.querySelector('.rank-card-sub').innerHTML = c.next
    ? `Next: ${c.next} まであと ${remain.toLocaleString()} pt`
    : '<span class="rank-max-badge"><i class="fas fa-star" style="color:var(--brand);font-size:10px"></i> <span>MAX RANK</span></span>';
  card.querySelector('.rank-progress-fill').style.width = progress + '%';
  card.querySelector('.rank-progress-fill').style.background = badgeBg;
  card.querySelectorAll('.rank-progress-label-text')[0].textContent = c.pts.toLocaleString() + ' pt';
  card.querySelectorAll('.rank-progress-label-text')[1].textContent = progress + '%';
  card.querySelectorAll('.rank-benefit-card')[0].style.background = c.accentSoft;
  card.querySelectorAll('.rank-benefit-card')[0].querySelector('i').style.color = badgeBg;
  card.querySelectorAll('.rank-benefit-card')[0].querySelector('.rank-benefit-value').style.color = c.color;
  card.querySelectorAll('.rank-benefit-card')[0].querySelector('.rank-benefit-value').textContent = c.rate;
  card.querySelectorAll('.rank-benefit-card')[1].style.background = c.accentSoft;
  card.querySelectorAll('.rank-benefit-card')[1].querySelector('i').style.color = badgeBg;
  card.querySelectorAll('.rank-benefit-card')[1].querySelector('.rank-benefit-value').style.color = c.color;
  card.querySelectorAll('.rank-benefit-card')[1].querySelector('.rank-benefit-value').textContent = c.fee;
}

// ---------- Rank Variants for Menu Rank Detail ----------
function applyRankToMenuRank(root, rank) {
  const configs = {
    silver: {
      name: 'Silver', icon: 'fa-gem', color: '#9CA3AF', bg: '#F3F4F6',
      accent: 'rgba(156,163,175,0.65)', accentSoft: 'rgba(156,163,175,0.22)',
      badgeBg: '#C0C0C0', badgeText: '#111827',
      pts: 16800, basePts: 10000, nextPts: 50000, next: 'Gold',
      rate: 'x1.20', fee: '手数料 -25%',
      levUsd: '$50,000', nextLevUsd: '$200,000',
    },
    gold: {
      name: 'Gold', icon: 'fa-crown', color: '#D97706', bg: '#FFFBEB',
      accent: 'rgba(217,119,6,0.65)', accentSoft: 'rgba(217,119,6,0.22)',
      badgeBg: '#D97706', badgeText: '#fff',
      pts: 73500, basePts: 50000, nextPts: 50000, next: null,
      rate: 'x1.50', fee: '手数料 -50%',
      levUsd: '$200,000', nextLevUsd: null,
    }
  };
  const c = configs[rank];
  if (!c) return;

  const page = root.querySelector('[data-page="menuRank"]');
  if (!page) return;

  const badgeBg = c.badgeBg || c.color;
  const badgeText = c.badgeText || '#fff';
  const progress = c.next ? Math.round(((c.pts - c.basePts) / (c.nextPts - c.basePts)) * 100) : 100;

  // Update rank card
  const card = page.querySelector('.rank-card');
  card.style.borderColor = c.accent;
  card.querySelector('.rank-shield').style.background = badgeBg;
  card.querySelector('.rank-shield i').className = 'fas ' + c.icon;
  card.querySelector('.rank-shield i').style.color = badgeText;
  card.querySelector('.rank-card-name').style.color = c.color;
  card.querySelector('.rank-card-name').textContent = c.name;

  // Update benefit cards
  const benefits = card.querySelectorAll('.rank-benefit-card');
  benefits[0].style.background = c.accentSoft;
  benefits[0].querySelector('i').style.color = badgeBg;
  benefits[0].querySelector('.rank-benefit-value').style.color = c.color;
  benefits[0].querySelector('.rank-benefit-value').textContent = c.rate;
  benefits[1].style.background = c.accentSoft;
  benefits[1].querySelector('i').style.color = badgeBg;
  benefits[1].querySelector('.rank-benefit-value').style.color = c.color;
  benefits[1].querySelector('.rank-benefit-value').textContent = c.fee;

  // Update LEV_USD conditions
  const kvRows = card.querySelectorAll('.kv-row');
  kvRows[0].querySelector('.kv-value').textContent = c.levUsd;
  if (c.next) {
    kvRows[1].querySelector('.kv-key').textContent = '次のランク（' + c.next + '）';
    kvRows[1].querySelector('.kv-value').textContent = c.nextLevUsd;
  } else {
    kvRows[1].querySelector('.kv-key').textContent = '最高ランク';
    kvRows[1].querySelector('.kv-value').textContent = '—';
  }

  // Update points
  kvRows[2].querySelector('.kv-value').textContent = c.pts.toLocaleString() + ' pt';

  // Update progress bar
  const fill = card.querySelector('.rank-progress-fill');
  fill.style.width = progress + '%';
  fill.style.background = badgeBg;
  const labels = card.querySelectorAll('.rank-progress-label-text');
  if (c.next) {
    labels[0].textContent = c.pts.toLocaleString() + ' / ' + c.nextPts.toLocaleString() + ' pt';
    labels[1].textContent = progress + '%';
  } else {
    labels[0].textContent = c.pts.toLocaleString() + ' pt';
    labels[1].textContent = 'MAX';
  }

  // Update rank list - highlight current rank
  const appItems = page.querySelectorAll('.app-item');
  // Reset all
  appItems.forEach(item => {
    item.style.borderColor = '';
    item.style.borderWidth = '';
  });
  // Member
  appItems[0].querySelector('div[style*="font-weight:900"]').textContent = 'Member';
  appItems[0].querySelector('div[style*="font-weight:900"]').style.color = '#92400E';
  // Silver
  if (rank === 'silver') {
    appItems[1].style.borderColor = c.accent;
    appItems[1].style.borderWidth = '2px';
    appItems[1].querySelector('div[style*="font-weight:900"]').textContent = 'Silver (現在)';
    appItems[1].querySelector('div[style*="font-weight:900"]').style.color = c.color;
  }
  // Gold
  if (rank === 'gold') {
    appItems[2].style.borderColor = c.accent;
    appItems[2].style.borderWidth = '2px';
    appItems[2].querySelector('div[style*="font-weight:900"]').textContent = 'Gold (現在)';
    appItems[2].querySelector('div[style*="font-weight:900"]').style.color = c.color;
  }

  // Also update profile rank if visible
  const profilePage = root.querySelector('[data-page="profile"]');
  if (profilePage) {
    const rankKv = profilePage.querySelectorAll('.kv-value');
    // Find the rank display
    rankKv.forEach(kv => {
      const shield = kv.querySelector('i.fas');
      if (shield && shield.classList.contains('fa-shield-alt')) {
        shield.className = 'fas ' + c.icon;
        shield.style.color = c.color;
        const nameSpan = kv.querySelector('span[style*="color"]');
        if (nameSpan) {
          nameSpan.style.color = c.color;
          nameSpan.textContent = c.name;
        }
      }
    });
  }
}

// ---------- Frame Creation ----------
function createFrame(config, lang) {
  const wrapper = document.createElement('div');
  wrapper.className = 'figma-screen-wrapper';

  // Label
  const label = document.createElement('div');
  label.className = 'figma-label';
  label.textContent = lang === 'en' ? config.labelEn : config.labelJa;
  wrapper.appendChild(label);

  // Phone frame
  const phone = document.createElement('div');
  phone.className = 'phone-frame';
  phone.innerHTML = PHONE_TEMPLATE;
  wrapper.appendChild(phone);

  // Setup based on type
  if (config.type === 'auth') {
    // Show the target auth screen
    const target = phone.querySelector(`[data-screen="${config.screen}"]`);
    if (target) target.style.display = 'flex';
    // Hide header, main, nav
    // (they default to display:none via style attribute)
    // Run setup function if any
    if (config.setup) config.setup(phone);
  } else if (config.type === 'app') {
    // Show header, main, nav
    phone.querySelector('[data-part="header"]').style.display = 'flex';
    phone.querySelector('[data-part="main"]').style.display = 'block';
    phone.querySelector('[data-part="nav"]').style.display = 'flex';

    // Show only target page
    phone.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    const targetPage = phone.querySelector(`[data-page="${config.page}"]`);
    if (targetPage) targetPage.classList.remove('hidden');

    // Set active tab
    phone.querySelectorAll('.tab-item').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === config.tab);
    });

    // Rank variant (dashboard)
    if (config.rank) {
      applyRankToDashboard(phone, config.rank);
    }

    // Menu rank variant
    if (config.menuRankState) {
      applyRankToMenuRank(phone, config.menuRankState);
    }

    // KYC state
    if (config.kycState) {
      const kycBody = phone.querySelector('.kyc-body');
      if (kycBody) kycBody.innerHTML = getKycHtml(config.kycState);
    }

    // Payout mode
    if (config.payoutMode === 'form') {
      // Default: form visible, history hidden (already set in template)
    } else if (config.payoutMode === 'history') {
      const formSection = phone.querySelector('.payout-form-section');
      const histSection = phone.querySelector('.payout-history-section');
      if (formSection) formSection.style.display = 'none';
      if (histSection) histSection.style.display = 'block';

      // Show only the target payout state card
      const states = ['completed','pending','approved','processing','rejected','failed','cancelled'];
      const chipLabels = ['完了','申請中','承認済み','処理中','却下','失敗','キャンセル'];
      phone.querySelectorAll('.payout-state-item').forEach(card => {
        card.style.display = card.dataset.payoutState === config.payoutState ? 'block' : 'none';
      });
      // Update chips
      const chips = phone.querySelectorAll('.payout-state-chips .choice-chip');
      chips.forEach((chip, i) => {
        chip.classList.toggle('on', states[i] === config.payoutState);
      });
    }
  }

  return wrapper;
}


// ---------- Translation ----------
function applyTranslations(root) {
  if (typeof TRANSLATIONS === 'undefined') return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach(node => {
    let text = node.textContent;
    for (const [ja, en] of Object.entries(TRANSLATIONS)) {
      if (text.includes(ja)) {
        text = text.replace(new RegExp(ja.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), en);
      }
    }
    node.textContent = text;
  });

  // Also translate placeholder attributes
  root.querySelectorAll('[placeholder]').forEach(el => {
    const ph = el.getAttribute('placeholder');
    if (TRANSLATIONS[ph]) el.setAttribute('placeholder', TRANSLATIONS[ph]);
  });
}


// ---------- Main Render Function ----------
function renderAllFrames(lang) {
  SCREEN_CONFIGS.forEach(config => {
    const frame = createFrame(config, lang);
    if (lang === 'en') applyTranslations(frame);
    document.body.appendChild(frame);
  });
}
