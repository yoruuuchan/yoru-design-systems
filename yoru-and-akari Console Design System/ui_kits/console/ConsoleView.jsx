function ConsoleView({ channel, settings, onChange, onOpenProvider, onOpenLogs, onSave }) {
  return (
    <div>
      <SectionHeader meta={settings.unsaved ? "unsaved" : `saved · ${settings.savedAt}`}>console</SectionHeader>

      <SettingsGroup title={`channel · ${channel.name}`}>
        <SettingRow icon="cpu" label="model" value={settings.model} onClick={onOpenProvider} />
        <SettingRow icon="sliders-horizontal" label="temperature" value={settings.temperature.toFixed(2)} onClick={() => {}} />
        <SettingRow icon="zap" label="proactive" sub="messages can be sent without you" control={<Toggle on={settings.proactive} onChange={(v) => onChange("proactive", v)} />} />
        <SettingRow icon="radio" label="stream tokens" control={<Toggle on={settings.stream} onChange={(v) => onChange("stream", v)} />} />
      </SettingsGroup>

      <SettingsGroup title="prompt · 系">
        <SettingRow icon="git-branch" label="system prompt" sub="13 lines · last edit 2d ago" onClick={() => {}} />
        <SettingRow icon="book-open" label="worldbook" value="3 entries" onClick={() => {}} />
        <SettingRow icon="wrench" label="tools" value={`${settings.tools.length} enabled`} onClick={() => {}} />
      </SettingsGroup>

      <SettingsGroup title="safety">
        <SettingRow icon="bell-off" label="quiet hours" value={settings.quietHours} onClick={() => {}} />
        <SettingRow icon="shield" label="content guard" sub="block messages that violate policy" control={<Toggle on={settings.guard} onChange={(v) => onChange("guard", v)} />} />
        <SettingRow icon="alert-triangle" label="cost cap" value={`$${settings.costCap.toFixed(2)} / day`} onClick={() => {}} />
      </SettingsGroup>

      <SettingsGroup title="diagnostics">
        <SettingRow icon="terminal" label="logs" value={`${settings.logCount} · ${settings.errorCount > 0 ? settings.errorCount + " err" : "ok"}`} onClick={onOpenLogs} />
        <SettingRow icon="plug" label="providers" value={`${settings.providerCount} connected`} onClick={onOpenProvider} />
      </SettingsGroup>

      <SettingsGroup title="danger zone">
        <SettingRow icon="trash-2" label="delete channel" sub="cannot be undone" danger onClick={() => {}} />
      </SettingsGroup>

      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <Button variant="primary" onClick={onSave} disabled={!settings.unsaved} style={{ flex: 1, justifyContent: "center" }}>
          {settings.unsaved ? "save changes" : "saved"}
        </Button>
        <Button variant="ghost" onClick={() => {}}>discard</Button>
      </div>
    </div>
  );
}

Object.assign(window, { ConsoleView });
