const {Stage,Text,Surface,Rule}=window.KIHONDesignSystem_bc9292;
const {In}=window.KitShared;
function TitleFrame({theme}){
  return (
    <Stage format="landscape" theme={theme}>
      <div style={{flex:1,display:'flex',alignItems:'center',gap:'calc(56px * var(--u))'}}>
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:'calc(30px * var(--u))'}}>
          <In f={4}><Text role="display">让时长从内容长出来</Text></In>
          <In f={12}><Text role="subtitle" color="muted">阅读预算 hold = max(26, 汉字数 × 7.5) 帧——加一行字，片子自己变长。</Text></In>
        </div>
        <In f={16} role="panel" style={{flex:'0 0 calc(430px * var(--u))'}}>
          <Surface level="plate" style={{display:'flex',flexDirection:'column',gap:'calc(16px * var(--u))'}}>
            <span className="k-label">Spec</span>
            <In f={20} role="rule"><Rule/></In>
            {[['fade','8f'],['stagger','8f'],['phase','18f'],['hold','26f +']].map(([k,v])=>(
              <div key={k} style={{display:'flex',alignItems:'baseline',gap:'calc(14px * var(--u))'}}>
                <span className="k-data-tick" style={{flex:1}}>{k}</span>
                <span className="k-data-tick" style={{color:'var(--accent)'}}>{v}</span>
              </div>
            ))}
          </Surface>
        </In>
      </div>
    </Stage>
  );
}
window.TitleFrame=TitleFrame;