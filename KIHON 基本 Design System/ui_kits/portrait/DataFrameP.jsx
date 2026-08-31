const {Stage,Text,Bar}=window.KIHONDesignSystem_bc9292;
const {In,ms}=window.KitShared;
const ROWS=[{l:'f32–35',v:3},{l:'f51–57',v:6},{l:'f60–66',v:5},{l:'f71–82',v:4}];
function DataFrameP({theme}){
  return (
    <Stage format="portrait" theme={theme}>
      <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:'calc(40px * var(--u))'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'calc(18px * var(--u))'}}>
          <In f={0}><Text role="title">静帧是设计<br/>的一部分</Text></In>
          <In f={8}><Text role="body" color="muted">多数片子在 40%–70% 处就停了，剩下的是阅读时间。</Text></In>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'calc(26px * var(--u))'}}>
          {ROWS.map((b,i)=>(
            <div key={b.l} style={{display:'flex',flexDirection:'column',gap:'calc(10px * var(--u))'}}>
              <In f={11+i*8}><span className="k-data-tick">{b.l}</span></In>
              <div style={{display:'flex',alignItems:'center',gap:'calc(16px * var(--u))'}}>
                <div className="ke-grow-x" style={{width:(b.v/6*82)+'%',animationDelay:ms(11+i*8)}}>
                  <Bar direction="right" value={1} step={i+1}/>
                </div>
                <In f={11+i*8+8}><span className="k-data-tick" style={{color:'var(--ink)'}}>{b.v}</span></In>
              </div>
            </div>
          ))}
        </div>
        <In f={45}><Text role="caption" color="faint">最后一次可见运动的帧号 · 总长 90 帧</Text></In>
      </div>
    </Stage>
  );
}
window.DataFrameP=DataFrameP;