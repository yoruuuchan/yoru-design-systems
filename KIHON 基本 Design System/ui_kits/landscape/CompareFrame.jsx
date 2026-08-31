const {Stage,Text,Surface}=window.KIHONDesignSystem_bc9292;
const {In}=window.KitShared;
const BEFORE=['hold 固定 26 帧，谁都可以不管它','时长手填 durationInFrames','竖屏由横屏内容重排后靠上摆'];
const AFTER=['hold 从字数长出来，人和 agent 都不会填错','加一行字，片子自己变长','9:16 是原生版式，不是适配'];
function Panel({f0,label,items,mark,markColor,dimmed,theme}){
  return (
    <In f={f0} role="panel" style={{flex:1,display:'flex'}}>
      <Surface emphasized={!dimmed} style={{flex:1,opacity:dimmed?0.72:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:'calc(26px * var(--u))'}}>
        <span className="k-label" style={{color:dimmed?'var(--negative)':'var(--accent)'}}>{label}</span>
        <div style={{display:'flex',flexDirection:'column',gap:'calc(14px * var(--u))'}}>
          {items.map((it,i)=>(
            <In key={it} f={f0+5+i*7}>
              <div style={{display:'flex',alignItems:'baseline',gap:'calc(14px * var(--u))'}}>
                <span style={{color:markColor,fontSize:'calc(30px * var(--u))',lineHeight:1}}>{mark}</span>
                <span className="k-body" style={{color:dimmed?'var(--ink-muted)':'var(--ink)'}}>{it}</span>
              </div>
            </In>
          ))}
        </div>
      </Surface>
    </In>
  );
}
function CompareFrame({theme}){
  return (
    <Stage format="landscape" theme={theme}>
      <div style={{flex:1,display:'flex',alignItems:'stretch',gap:'calc(40px * var(--u))'}}>
        <Panel f0={6} label="Before" items={BEFORE} mark="✗" markColor="var(--negative)" dimmed/>
        <In f={24} role="solid" style={{display:'flex',alignItems:'center'}}>
          <span style={{color:'var(--ink-faint)',fontSize:'calc(46px * var(--u))',lineHeight:1}}>→</span>
        </In>
        <Panel f0={24} label="After" items={AFTER} mark="✓" markColor="var(--positive)"/>
      </div>
    </Stage>
  );
}
window.CompareFrame=CompareFrame;