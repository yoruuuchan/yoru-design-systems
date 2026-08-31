const {Stage,Text,Surface}=window.KIHONDesignSystem_bc9292;
const {In}=window.KitShared;
const BEFORE=['hold 固定 26 帧','时长手填','竖屏靠重排'];
const AFTER=['hold 从字数长出来','时长自己变','9:16 原生版式'];
function PanelP({f0,label,items,mark,markColor,dimmed}){
  return (
    <In f={f0} role="panel" style={{display:'flex'}}>
      <Surface emphasized={!dimmed} style={{flex:1,opacity:dimmed?0.72:1,display:'flex',flexDirection:'column',gap:'calc(16px * var(--u))'}}>
        <span className="k-label" style={{color:dimmed?'var(--negative)':'var(--accent)'}}>{label}</span>
        <div style={{display:'flex',flexDirection:'column',gap:'calc(12px * var(--u))'}}>
          {items.map((it,i)=>(
            <In key={it} f={f0+5+i*7}>
              <div style={{display:'flex',alignItems:'baseline',gap:'calc(14px * var(--u))'}}>
                <span style={{color:markColor,fontSize:'calc(30px * var(--u))',lineHeight:1}}>{mark}</span>
                <span className="k-body">{it}</span>
              </div>
            </In>
          ))}
        </div>
      </Surface>
    </In>
  );
}
function CompareFrameP({theme}){
  return (
    <Stage format="portrait" theme={theme}>
      <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:'calc(22px * var(--u))'}}>
        <PanelP f0={6} label="Before" items={BEFORE} mark="✗" markColor="var(--negative)" dimmed/>
        <In f={24} role="solid" style={{display:'flex',justifyContent:'center'}}>
          <span style={{color:'var(--ink-faint)',fontSize:'calc(46px * var(--u))',lineHeight:1}}>↓</span>
        </In>
        <PanelP f0={24} label="After" items={AFTER} mark="✓" markColor="var(--positive)"/>
      </div>
    </Stage>
  );
}
window.CompareFrameP=CompareFrameP;