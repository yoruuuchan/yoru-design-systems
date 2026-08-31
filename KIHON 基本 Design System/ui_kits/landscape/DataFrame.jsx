const {Stage,Text,Bar,Rule}=window.KIHONDesignSystem_bc9292;
const {In,ms}=window.KitShared;
const ROWS=[{l:'f32–35',v:3},{l:'f51–57',v:6},{l:'f60–66',v:5},{l:'f71–82',v:4}];
function DataFrame({theme}){
  return (
    <Stage format="landscape" theme={theme}>
      <div style={{flex:1,display:'flex',alignItems:'stretch',gap:'calc(72px * var(--u))'}}>
        <div style={{flex:'0 0 40%',display:'flex',flexDirection:'column',justifyContent:'center',gap:'calc(22px * var(--u))'}}>
          <In f={0}><Text role="title">静帧是设计的一部分</Text></In>
          <In f={8}><Text role="body" color="muted">对 20 个模板逐帧算画面变化量：多数片子在 40%–70% 处就停了，剩下的 1–2 秒是留给人读完的时间。</Text></In>
          <In f={40}><Text role="caption" color="faint">最后一次可见运动的帧号 · 总长 90 帧</Text></In>
        </div>
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:'calc(12px * var(--u))'}}>
          <div style={{flex:1,display:'flex',alignItems:'flex-end',gap:'calc(34px * var(--u))'}}>
            {ROWS.map((b,i)=>(
              <div key={b.l} style={{flex:1,height:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center',gap:'calc(14px * var(--u))'}}>
                <In f={11+i*8+8}><span className="k-data-tick" style={{color:'var(--ink)'}}>{b.v}</span></In>
                <div className="ke-grow-y" style={{width:'100%',height:(b.v/6*100)+'%',animationDelay:ms(11+i*8)}}>
                  <Bar value={1} step={i+1}/>
                </div>
              </div>
            ))}
          </div>
          <In f={11} role="rule"><Rule tone="strong" style={{flexGrow:0}}/></In>
          <div style={{display:'flex',gap:'calc(34px * var(--u))'}}>
            {ROWS.map((b,i)=>(
              <In key={b.l} f={11+i*8} role="rule" style={{flex:1,display:'flex',justifyContent:'center'}}>
                <span style={{width:1,height:'calc(var(--tick-h) * var(--u))',background:'var(--line)'}}></span>
              </In>
            ))}
          </div>
          <div style={{display:'flex',gap:'calc(34px * var(--u))'}}>
            {ROWS.map((b,i)=>(
              <In key={b.l} f={11+i*8} style={{flex:1,textAlign:'center'}}><span className="k-data-tick">{b.l}</span></In>
            ))}
          </div>
        </div>
      </div>
    </Stage>
  );
}
window.DataFrame=DataFrame;