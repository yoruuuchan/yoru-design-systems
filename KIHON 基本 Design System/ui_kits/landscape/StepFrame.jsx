const {Stage,Text,Chip,Numeral}=window.KIHONDesignSystem_bc9292;
const {In,ms}=window.KitShared;
const STEPS=[
  {n:'01',t:'parallel 并列',f:'0f',d:'读起来是一张双栏表、一组同级卡片'},
  {n:'02',t:'sequence 递进',f:'8f',d:'读起来是一个列表、一串步骤'},
  {n:'03',t:'causal 因果',f:'18f',d:'读起来是「从 A 变成了 B」'}
];
function StepFrame({theme}){
  return (
    <Stage format="landscape" theme={theme}>
      <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:'calc(26px * var(--u))'}}>
        <In f={0}><Text role="title">相位差是语义，不是装饰</Text></In>
        <div style={{display:'flex',flexDirection:'column'}}>
          {STEPS.map((s,i)=>(
            <In key={s.n} f={11+i*11}>
              <div style={{display:'flex',alignItems:'center',gap:'calc(30px * var(--u))',padding:'calc(24px * var(--u)) 0',borderBottom:'1px solid var(--line)'}}>
                <Numeral tick value={s.n}/>
                <span className="k-data-label" style={{width:'calc(420px * var(--u))'}}>{s.t}</span>
                <span className="k-data-tick" style={{color:'var(--accent)',width:'calc(90px * var(--u))'}}>{s.f}</span>
                <span className="k-caption" style={{flex:1}}>{s.d}</span>
                {i===2&&<In f={11+i*11+8+4} role="solid"><Chip state="active">相差 0.6 秒</Chip></In>}
              </div>
            </In>
          ))}
        </div>
      </div>
    </Stage>
  );
}
window.StepFrame=StepFrame;