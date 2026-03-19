/* =============================================
   KING & QUEEN Admin Console - English Translations
   ============================================= */

const ADMIN_TRANSLATIONS = {
  // -----------------------------------------------
  // Login Screen
  // -----------------------------------------------
  '管理コンソール': 'Admin Console',
  'メールアドレス': 'Email Address',
  'パスワード': 'Password',
  'ログイン': 'Login',
  'メールアドレスまたはパスワードが正しくありません': 'Invalid email address or password',
  'ログインしました': 'Logged in',
  '管理者としてログイン中': 'Logged in as administrator',
  'ログアウト': 'Logout',
  'ログアウトしました': 'Logged out',

  // -----------------------------------------------
  // Sidebar - Navigation Section Headers
  // -----------------------------------------------
  'メイン': 'Main',
  '運用・操作': 'Operations',
  'データベース': 'Database',
  'コンテンツ': 'Content',
  'システム': 'System',

  // -----------------------------------------------
  // Sidebar - Navigation Items
  // -----------------------------------------------
  'ダッシュボード': 'Dashboard',
  '承認タスク': 'Approval Tasks',
  'CSVインポート・台帳反映': 'CSV Import & Ledger Sync',
  'ユーザー管理': 'User Management',
  'トークン台帳': 'Token Ledger',
  'お知らせ管理': 'Announcements',
  'マスター管理': 'Master Settings',
  'アカウント': 'Account',
  '権限': 'Role',
  '管理者': 'Admin',

  // -----------------------------------------------
  // Breadcrumb
  // -----------------------------------------------
  '管理コンソール / ダッシュボード': 'Admin Console / Dashboard',

  // -----------------------------------------------
  // Notifications
  // -----------------------------------------------
  '通知': 'Notifications',

  // -----------------------------------------------
  // Dashboard - KPI Cards
  // -----------------------------------------------
  '未承認の口座申請': 'Pending Account Applications',
  '未処理の出金申請': 'Pending Withdrawal Requests',
  '有効ユーザー数': 'Active Users',
  'KQ トークンレート': 'KQ Token Rate',
  '件のアクションが必要': 'action(s) required',
  'ウォレット接続済み': 'Wallets connected',
  'API同期中...': 'Syncing with API...',

  // -----------------------------------------------
  // Dashboard - Charts
  // -----------------------------------------------
  'ユーザー数（推移）': 'User Count (Trend)',
  '日別の累計ユーザー数': 'Daily cumulative user count',
  'KQトークン付与総数（推移）': 'KQ Token Grants (Trend)',
  '日別のKQトークン付与量': 'Daily KQ token grant volume',
  'KQトークンレート（推移）': 'KQ Token Rate (Trend)',
  '直近のレート変動': 'Recent rate changes',
  'ユーザー数': 'User Count',
  'KQ付与': 'KQ Grants',
  'KQレート (JPY)': 'KQ Rate (JPY)',

  // -----------------------------------------------
  // Approval Tasks - Panel Header
  // -----------------------------------------------
  '口座連携申請と出金申請の承認/却下を一元管理': 'Centralized management of account linking and withdrawal approvals/rejections',

  // -----------------------------------------------
  // Approval Tasks - Tabs
  // -----------------------------------------------
  '口座連携申請': 'Account Linking Requests',
  '出金申請': 'Withdrawal Requests',

  // -----------------------------------------------
  // Approval Tasks - Demo Buttons
  // -----------------------------------------------
  '+ デモ口座申請': '+ Demo Account Application',
  '+ デモ出金申請': '+ Demo Withdrawal Request',
  '+ デモ退会申請を追加': '+ Add Demo Withdrawal Request',

  // -----------------------------------------------
  // Table Headers - Account Linking
  // -----------------------------------------------
  '申請日時': 'Application Date',
  'ユーザー (Wallet)': 'User (Wallet)',
  'ブローカー': 'Broker',
  '口座番号': 'Account Number',
  'ステータス': 'Status',
  '操作': 'Actions',

  // -----------------------------------------------
  // Table Headers - Withdrawal Requests
  // -----------------------------------------------
  'ユーザーID': 'User ID',
  'メール': 'Email',
  'ウォレットアドレス': 'Wallet Address',
  '保有ポイント': 'Balance',
  '出金申請額': 'Withdrawal Amount',
  'アセット': 'Asset',
  '送金ステータス': 'Transfer Status',

  // -----------------------------------------------
  // Table Headers - Users
  // -----------------------------------------------
  'ランク': 'Rank',
  '紐づき口座一覧': 'Linked Accounts',
  '残高': 'Balance',
  '状態': 'Status',

  // -----------------------------------------------
  // Table Headers - Ledger
  // -----------------------------------------------
  '日付': 'Date',
  'ユーザー': 'User',
  '種別': 'Type',
  '増減': 'Change',
  '参照': 'Reference',

  // -----------------------------------------------
  // Table Headers - Announcements
  // -----------------------------------------------
  '作成日時': 'Created At',
  'タイトル / 本文': 'Title / Body',
  'カテゴリ': 'Category',
  '優先度': 'Priority',

  // -----------------------------------------------
  // Table Headers - CSV Import Preview
  // -----------------------------------------------
  '行': 'Row',
  '原資(IB報酬)': 'IB Reward (Source)',
  '付与KQ': 'KQ Granted',
  '備考': 'Notes',

  // -----------------------------------------------
  // Table Headers - Brokers
  // -----------------------------------------------
  'コード': 'Code',
  '名称': 'Name',
  '表示名': 'Display Name',
  'CSV形式': 'CSV Format',
  '還元率': 'Reward Rate',
  'IB通貨': 'IB Currency',

  // -----------------------------------------------
  // Filter Labels
  // -----------------------------------------------
  '検索（user_id, メール）': 'Search (user_id, email)',
  '開始日': 'Start Date',
  '終了日': 'End Date',

  // -----------------------------------------------
  // Select Options - Filter Status
  // -----------------------------------------------
  'すべて': 'All',

  // -----------------------------------------------
  // Select Options - Announcements Status
  // -----------------------------------------------
  '下書き': 'Draft',
  '予約公開': 'Scheduled',
  '公開中': 'Published',
  'アーカイブ': 'Archived',

  // -----------------------------------------------
  // Withdrawal Status Pills
  // -----------------------------------------------
  '申請中': 'Pending',
  '承認済み': 'Approved',
  '処理中': 'Processing',
  '完了': 'Completed',
  '失敗': 'Failed',
  'キャンセル': 'Cancelled',

  // -----------------------------------------------
  // KYC Status Pills
  // -----------------------------------------------
  '未提出': 'Not Submitted',
  '審査中': 'Under Review',
  '却下': 'Rejected',

  // -----------------------------------------------
  // Announcement Category Pills
  // -----------------------------------------------
  'メンテナンス': 'Maintenance',
  'アップデート': 'Update',
  'キャンペーン': 'Campaign',
  'その他': 'Other',

  // -----------------------------------------------
  // Announcement Priority Pills
  // -----------------------------------------------
  '高': 'High',
  '通常': 'Normal',
  '低': 'Low',

  // -----------------------------------------------
  // Broker Status Pills
  // -----------------------------------------------
  'メンテ中': 'Under Maintenance',
  '稼働': 'Active',

  // -----------------------------------------------
  // Emergency Stop Labels
  // -----------------------------------------------
  'CSV取込': 'CSV Import',
  '付与': 'Rewards',
  '出金': 'Withdrawal',
  '口座連携': 'Account Linking',
  '停止中': 'Stopped',
  '停止': 'Stop',
  '再開': 'Resume',

  // -----------------------------------------------
  // User Status Pills
  // -----------------------------------------------
  '退会申請中': 'Withdrawal Request Pending',

  // -----------------------------------------------
  // Duplicate Alert
  // -----------------------------------------------
  '重複': 'Duplicate',

  // -----------------------------------------------
  // Campaign Labels
  // -----------------------------------------------
  '期間限定': 'Time-Limited',
  '個別': 'Per User',
  '有効': 'Active',
  '無効': 'Inactive',
  'キャンペーンなし': 'No campaigns',

  // -----------------------------------------------
  // Distribution Ratios
  // -----------------------------------------------
  '合計100%ではありません': 'Total does not equal 100%',
  'アセット名': 'Asset Name',

  // -----------------------------------------------
  // Rank Master Labels
  // -----------------------------------------------
  '倍率:': 'Multiplier:',
  '昇格閾値 LEV_USD:': 'Promotion Threshold LEV_USD:',

  // -----------------------------------------------
  // Buttons - General
  // -----------------------------------------------
  '保存': 'Save',
  'キャンセル': 'Cancel',
  '追加': 'Add',
  '編集': 'Edit',
  '削除': 'Delete',
  '閉じる': 'Close',
  '適用': 'Apply',
  '公開': 'Publish',
  '承認': 'Approve',
  '却下する': 'Reject',
  'BANを実行': 'Execute BAN',
  '没収を実行': 'Execute Confiscation',
  '新規作成': 'Create New',
  '下書き保存': 'Save as Draft',
  '送金処理開始': 'Start Transfer',
  '送金完了': 'Send Complete',
  '送金失敗': 'Transfer Failed',

  // -----------------------------------------------
  // Buttons - Action Specific
  // -----------------------------------------------
  '確定して台帳に反映': 'Confirm and Apply to Ledger',
  'テンプレートCSV': 'Template CSV',
  'CSV出力': 'Export CSV',
  'ファイルを選択してアップロード': 'Select and Upload File',
  'アセット追加': 'Add Asset',
  '強制退会(BAN)': 'Force Withdrawal (BAN)',
  'BAN解除': 'Unban',
  'トークン没収': 'Confiscate Tokens',
  '退会申請を承認': 'Approve Withdrawal Request',
  'デルタ調整': 'Delta Adjustment',

  // -----------------------------------------------
  // Modal Titles
  // -----------------------------------------------
  '口座申請 操作': 'Account Application Actions',
  '却下理由の入力': 'Enter Rejection Reason',
  'お知らせを編集': 'Edit Announcement',
  'お知らせを作成': 'Create Announcement',
  '提携FX業者を編集': 'Edit Partner FX Broker',
  '提携FX業者を追加': 'Add Partner FX Broker',
  'ユーザー操作': 'User Actions',
  'ユーザー編集': 'Edit User',
  '台帳編集': 'Edit Ledger',
  '出金操作': 'Withdrawal Actions',
  '出金申請 編集': 'Edit Withdrawal Request',
  'デルタ調整（追記型）': 'Delta Adjustment (Append-Only)',
  'キャンペーン追加': 'Add Campaign',
  'タイトル': 'Title',
  '詳細': 'Details',

  // -----------------------------------------------
  // Drawer Title
  // -----------------------------------------------

  // -----------------------------------------------
  // Form Labels - Announcements
  // -----------------------------------------------
  '本文': 'Body',
  '予約公開日時': 'Scheduled Publish Date',

  // -----------------------------------------------
  // Form Labels - Broker
  // -----------------------------------------------
  'コード（識別子）': 'Code (Identifier)',
  'アフィリエイトURL': 'Affiliate URL',
  'メンテナンスフラグ': 'Maintenance Flag',
  '稼働中': 'Active',
  'メンテナンス中（付与停止）': 'Under Maintenance (Rewards Paused)',
  '有効フラグ': 'Active Flag',

  // -----------------------------------------------
  // Form Labels - User Edit
  // -----------------------------------------------
  'KYCステータス': 'KYC Status',
  '残高（アセット別）': 'Balance (Per Asset)',

  // -----------------------------------------------
  // Form Labels - Ledger Edit
  // -----------------------------------------------
  '増減（delta）': 'Change (Delta)',

  // -----------------------------------------------
  // Form Labels - Withdrawal Edit
  // -----------------------------------------------
  '数量': 'Amount',
  '送付先': 'Destination',
  '未処理': 'Unprocessed',
  'TxHash（任意）': 'TxHash (Optional)',

  // -----------------------------------------------
  // Form Labels - Delta Adjustment
  // -----------------------------------------------
  '調整額（正=加算, 負=減算）': 'Adjustment (Positive = Add, Negative = Subtract)',
  '理由（必須）': 'Reason (Required)',

  // -----------------------------------------------
  // Form Labels - Confiscation
  // -----------------------------------------------
  '没収対象アセット': 'Asset to Confiscate',
  '全アセット': 'All Assets',
  '没収額（空=全額）': 'Confiscation Amount (Empty = Full)',
  '没収理由（必須）': 'Confiscation Reason (Required)',

  // -----------------------------------------------
  // Form Labels - BAN
  // -----------------------------------------------
  'BAN理由（必須）': 'BAN Reason (Required)',

  // -----------------------------------------------
  // Form Labels - Campaign
  // -----------------------------------------------
  'タイプ': 'Type',
  '倍率': 'Multiplier',

  // -----------------------------------------------
  // Form Labels - Settings
  // -----------------------------------------------
  'デフォルト付与アセット': 'Default Reward Asset',
  '還元率 (%)': 'Reward Rate (%)',
  '出金ネットワーク': 'Withdrawal Network',

  // -----------------------------------------------
  // Settings Panel Titles
  // -----------------------------------------------
  'ルール設定': 'Rule Settings',
  '付与アセット・出金ネットワークの設定': 'Reward asset and withdrawal network settings',
  '提携FX業者と設定値': 'Partner FX Brokers & Settings',
  'ブローカーごとのパラメータ管理': 'Broker-specific parameter management',
  '配分比率（DST-01）': 'Distribution Ratios (DST-01)',
  'アセット間の配分比率（合計100%）': 'Distribution ratios across assets (total 100%)',
  'ランクマスター（RNK-01）': 'Rank Master (RNK-01)',
  'ランク定義・還元率倍率・昇格条件': 'Rank definitions, rate multipliers, and promotion criteria',
  'キャンペーン管理（CMP-01）': 'Campaign Management (CMP-01)',
  'キャンペーン倍率（期間限定/個別）の管理': 'Campaign multiplier management (time-limited/per-user)',
  '参考レート（PRC-01）': 'Reference Rates (PRC-01)',
  '各アセットの参考レート（付与量計算に使用）': 'Reference rates for each asset (used for grant calculations)',
  '緊急停止スイッチ（OPS-01）': 'Emergency Stop Switch (OPS-01)',
  '異常時に即時停止/再開': 'Immediate stop/resume during anomalies',

  // -----------------------------------------------
  // CSV Import Section
  // -----------------------------------------------
  'KQ トークンレート（リアルタイム）': 'KQ Token Rate (Real-Time)',
  '取引データCSVインポート': 'Trade Data CSV Import',
  'ブローカーからダウンロードしたCSV/Excelを取り込み、KQトークン付与を計算します': 'Import CSV/Excel downloaded from broker to calculate KQ token grants',
  'CSVファイルをドラッグ&ドロップ': 'Drag & Drop CSV File',
  'ブローカーのレポートCSVをここにドラッグしてください': 'Drag broker report CSV here',
  'または': 'or',
  'CSV内の broker 列でブローカーを自動判定': 'Broker auto-detected from broker column in CSV',
  'ファイル未選択': 'No file selected',
  '未選択': 'Not selected',
  '行数': 'Row Count',
  '適用 / スキップ / 除外': 'Applied / Skipped / Excluded',
  '処理ログ': 'Processing Log',
  '最終インポート:': 'Last Import:',
  '未実行': 'Not yet executed',
  'CSVファイルをアップロードしてください': 'Please upload a CSV file',
  'CSVが空です': 'CSV is empty',

  // -----------------------------------------------
  // CSV Import - Error Messages
  // -----------------------------------------------
  '必須列が不足しています。新形式: トレーダー名, アフィリエイト報酬 / 旧形式: date, accountNo, lots': 'Required columns missing. New format: Trader Name, Affiliate Reward / Legacy format: date, accountNo, lots',
  '同一ファイル（hash一致）は取り込み済みのため、確定できません。': 'This file (matching hash) has already been imported and cannot be confirmed.',
  'CSV取込は緊急停止中です。': 'CSV import is currently emergency-stopped.',
  '未登録ユーザーのため除外': 'Excluded: unregistered user',
  '過去に取り込み済み': 'Already imported',
  '過去に取り込み済み（txKey重複）': 'Already imported (duplicate txKey)',
  '未承認口座のため除外': 'Excluded: unapproved account',

  // -----------------------------------------------
  // CSV Import - Column Headers
  // -----------------------------------------------
  'トレーダー名': 'Trader Name',
  '口座タイプ': 'Account Type',
  '口座通貨': 'Account Currency',
  '発注時間': 'Order Time',
  '決済時間': 'Settlement Time',
  '取引カテゴリ': 'Trade Category',
  '取引タイプ': 'Trade Type',
  '金融商品': 'Financial Instrument',
  '銘柄グループ': 'Symbol Group',
  'ロット数': 'Lot Size',
  '合計報酬': 'Total Reward',
  'アフィリエイト報酬': 'Affiliate Reward',

  // -----------------------------------------------
  // CSV Export Header
  // -----------------------------------------------
  '日付,ユーザー,アセット,種別,増減,理由,参照': 'Date,User,Asset,Type,Change,Reason,Reference',

  // -----------------------------------------------
  // Toast Messages - Success
  // -----------------------------------------------
  '承認しました': 'Approved',
  '却下しました': 'Rejected',
  'デモ申請を追加': 'Demo application added',
  'デモ出金を追加': 'Demo withdrawal added',
  '送金ステータス更新': 'Transfer status updated',
  'リセット完了': 'Reset complete',
  'Mockデータを初期化しました': 'Mock data has been initialized',
  '保存しました': 'Saved',
  '設定を更新しました': 'Settings updated',
  '追加しました': 'Added',
  '作成しました': 'Created',
  '削除しました': 'Deleted',
  'お知らせを削除しました': 'Announcement deleted',
  '確定しました': 'Confirmed',
  '配分比率を更新しました': 'Distribution ratios updated',
  'ランクマスターを更新しました': 'Rank master updated',
  '参考レートを更新しました': 'Reference rates updated',
  '強制退会しました': 'Force withdrawal executed',
  'BAN解除しました': 'BAN lifted',
  'トークン没収しました': 'Tokens confiscated',
  '退会申請を承認しました': 'Withdrawal request approved',
  'デモ退会申請を追加': 'Demo withdrawal request added',
  'デルタ調整を適用': 'Delta adjustment applied',
  'CSV出力完了': 'CSV export complete',
  'キャンペーン追加': 'Campaign added',
  'テーマ切替': 'Theme switched',

  // -----------------------------------------------
  // Toast Messages - Error
  // -----------------------------------------------
  '入力不正': 'Invalid input',
  'タイトルは必須です': 'Title is required',
  'コードと名称は必須です': 'Code and name are required',
  '名称は必須です': 'Name is required',
  'アセットが1つ以上必要です': 'At least one asset is required',
  '追加不可': 'Cannot add',
  'アクティブなユーザーがいません': 'No active users available',
  '退会申請可能なユーザーがいません': 'No users eligible for withdrawal request',
  '理由が必要です': 'Reason is required',
  'BAN理由を入力してください': 'Please enter a BAN reason',
  '没収理由を入力してください': 'Please enter a confiscation reason',
  '却下理由を入力してください': 'Please enter a rejection reason',
  '調整理由を入力してください': 'Please enter an adjustment reason',
  'ユーザーとアセットは必須です': 'User and asset are required',
  '調整額は0以外の数値を入力してください': 'Please enter a non-zero adjustment amount',
  'delta が数値ではありません': 'Delta is not a valid number',
  '数量が不正です': 'Invalid amount',
  '遷移不可': 'Transition not allowed',
  '取り込み済み': 'Already imported',
  '同一ファイル（hash一致）は確定できません': 'Cannot confirm duplicate file (matching hash)',
  'エラーあり': 'Contains errors',
  'エラーを修正してから確定してください': 'Please fix errors before confirming',
  '適用なし': 'Nothing to apply',
  '適用対象行がありません': 'No applicable rows',
  '緊急停止中': 'Emergency stopped',
  '付与処理は緊急停止中です': 'Reward processing is emergency-stopped',
  '出金処理は緊急停止中です': 'Withdrawal processing is emergency-stopped',
  '没収不要': 'No confiscation needed',
  '残高は既に0です': 'Balance is already 0',

  // -----------------------------------------------
  // Toast Messages - Warning / Info
  // -----------------------------------------------
  '緊急停止': 'Emergency Stop',

  // -----------------------------------------------
  // Notice / Hint Text
  // -----------------------------------------------
  '運用フロー': 'Operational Flow',
  '月1回、各ブローカーの管理画面からレポートCSVをダウンロード → この画面でアップロード → プレビュー確認 → 「確定して台帳に反映」で付与が確定します。': 'Monthly: Download report CSV from each broker\'s admin panel -> Upload on this screen -> Review preview -> Confirm with "Confirm and Apply to Ledger" to finalize grants.',
  '注意': 'Caution',
  '本番では、設定変更は監査ログ（誰がいつ何を変更したか）を必ず残す。': 'In production, all setting changes must be recorded in the audit log (who changed what and when).',
  '重複口座アラート': 'Duplicate Account Alert',
  'このブローカー/口座番号の組み合わせは複数申請に存在します。同一口座の重複登録の可能性があります。承認前に十分確認してください。': 'This broker/account number combination exists in multiple applications. There may be duplicate registrations. Please verify carefully before approving.',
  '承認または却下を選択してください': 'Please select approve or reject',
  '操作を選択してください': 'Please select an action',
  'この操作は取り消せません。ユーザーはプラットフォームにアクセスできなくなります。': 'This action cannot be undone. The user will lose access to the platform.',
  '運用メモ': 'Operational Note',
  '残高変更は差分を台帳に追記します。ランク/KYC変更は監査ログに記録されます。': 'Balance changes append the difference to the ledger. Rank/KYC changes are recorded in the audit log.',
  '台帳は追記型です。この操作は新しいエントリを追加します。既存エントリは変更されません。': 'The ledger is append-only. This operation adds a new entry. Existing entries are not modified.',
  '状態遷移: PENDING → 承認 → 処理中 → 完了/失敗': 'State transition: PENDING -> Approved -> Processing -> Completed/Failed',

  // -----------------------------------------------
  // Hint / Count Text
  // -----------------------------------------------
  '件': 'items',
  'ページ': 'page',
  '前': 'Prev',
  '次': 'Next',
  '理由:': 'Reason:',
  'なし': 'None',

  // -----------------------------------------------
  // Empty States
  // -----------------------------------------------
  '該当データがありません': 'No matching data found',
  'ユーザーがいません': 'No users found',
  '台帳が空です': 'Ledger is empty',
  'お知らせがありません': 'No announcements found',
  '業者が登録されていません': 'No brokers registered',

  // -----------------------------------------------
  // User Panel Descriptions
  // -----------------------------------------------
  'ウォレット・ランク・残高の確認。BAN・トークン没収・退会処理': 'View wallet, rank, and balance. BAN, token confiscation, and withdrawal processing',
  '付与/減算の履歴（追記型・編集不可）': 'Grant/deduction history (append-only, non-editable)',
  'ユーザーに表示するお知らせの作成・編集・公開管理': 'Create, edit, and publish announcements shown to users',
  'お知らせ管理（CMS）': 'Announcement Management (CMS)',

  // -----------------------------------------------
  // KV Row Labels (Modal Details)
  // -----------------------------------------------
  '現在の残高': 'Current Balance',
  '保有残高': 'Held Balance',
  '退会申請': 'Withdrawal Request',

  // -----------------------------------------------
  // CSV Import Validation Errors
  // -----------------------------------------------
  'broker列が空です': 'Broker column is empty',
  'accountNo が空です': 'accountNo is empty',
  'date が不正です': 'Date is invalid',
  'lots が不正です': 'Lots is invalid',

  // -----------------------------------------------
  // Broker Form Options
  // -----------------------------------------------
  'メンテナンス中': 'Under Maintenance',

  // -----------------------------------------------
  // Ledger Reasons (Data)
  // -----------------------------------------------
  '月次IB報酬': 'Monthly IB Reward',
  'キャンペーンボーナス': 'Campaign Bonus',
  '手動調整（計算誤差補正）': 'Manual Adjustment (Calculation Error Correction)',
  '不正利用による没収': 'Confiscation Due to Fraudulent Use',
  '入会ボーナス': 'Sign-up Bonus',

  // -----------------------------------------------
  // Announcement Data (Titles)
  // -----------------------------------------------
  'サービス開始のお知らせ': 'Service Launch Announcement',
  'メンテナンスのお知らせ': 'Maintenance Notice',
  '春のキャンペーン（下書き）': 'Spring Campaign (Draft)',
  'KQトークン出金機能リリース': 'KQ Token Withdrawal Feature Release',
  '9アセット対応のお知らせ': '9-Asset Support Announcement',
  'ランクシステム改定（予定）': 'Rank System Revision (Planned)',

  // -----------------------------------------------
  // Campaign Data
  // -----------------------------------------------
  '春キャンペーン': 'Spring Campaign',
  '入会1ヶ月キャンペーン': 'First Month Enrollment Campaign',
  'GOLD会員限定ボーナス': 'GOLD Member Exclusive Bonus',

  // -----------------------------------------------
  // Misc / Placeholders / Computed Text
  // -----------------------------------------------
  '例：メンテナンスのお知らせ': 'e.g.: Maintenance Notice',
  '例：口座番号が不正、本人確認未完了など': 'e.g.: Invalid account number, identity verification incomplete, etc.',
  '例: 不正利用の疑い': 'e.g.: Suspected fraudulent use',
  '例: 利用規約違反': 'e.g.: Terms of service violation',
  '例: 計算誤差の修正': 'e.g.: Correction of calculation error',
  '例: 春キャンペーン': 'e.g.: Spring Campaign',
  '合計:': 'Total:',
  '日間': 'days',
  '入会後': 'After enrollment',
  '行を反映しました': 'rows applied',
  '件をエクスポート': 'items exported',
  'を更新': 'updated',
  'を追加しました': 'has been added',
  'を APPROVED に更新': 'updated to APPROVED',
  'を REJECTED に更新': 'updated to REJECTED',
  'をBANしました': 'has been BANNED',
  'をACTIVEに戻しました': 'restored to ACTIVE',
  'を退会処理しました': 'withdrawal processed',
  'の退会申請': '\'s withdrawal request',
  'に': 'to',
  'を追記': 'appended',
  'は許可されていません': 'is not allowed',
};
