const {Stage,Text,Chip,Numeral}=window.KIHONDesignSystem_bc9292;
const {In}=window.KitShared;
const STEPS=[
  {n:'01',t:'parallel 并列',f:'0f',d:'一张双栏表'},
  {n:'02',t:'sequence 递进',f:'8f',d:'一个列表'},
  {n:'03',t:'causal 因果',f:'18f',d:'从 A 变成了 B'}
];
function StepFrameP({theme}){
  return (
    <Stage format="portrait" theme={theme}>
      <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:'calc(30px * var(--u))'}}>
        <In f={0}><Text role="title">相位差<br/>是语义</Text></In>
        <div style={{display:'flex',flexDirection:'column'}}>
          {STEPS.map((s,i)=>(
            <In key={s.n} f={11+i*11}>
              <div style={{display:'flex',flexDirection:'column',gap:'calc(8px * var(--u))',padding:'calc(22px * var(--u)) 0',borderBottom:'1px solid var(--line)'}}>
                <div style={{display:'flex',alignItems:'baseline',gap:'calc(18px * var(--u))'}}>
                  <Numeral tick value={s.n}/>
                  <span className="k-data-label" style={{flex:1}}>{s.t}</span>
                  <span className="k-data-tick" style={{color:'var(--accent)'}}>{s.f}</span>
                </div>
                <span className="k-caption" style={{paddingLeft:'calc(58px * var(--u))'}}>{s.d}</span>
              </div>
            </In>
          ))}
        </div>
        <In f={48} role="solid" style={{display:'flex'}}><Chip state="active">相位携带语义</Chip></In>
      </div>
    </Stage>
  );
}
window.StepFrameP=StepFrameP;