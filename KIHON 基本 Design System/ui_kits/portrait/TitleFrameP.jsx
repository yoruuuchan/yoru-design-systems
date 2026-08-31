const {Stage,Text}=window.KIHONDesignSystem_bc9292;
const {In}=window.KitShared;
function TitleFrameP({theme}){
  return (
    <Stage format="portrait" theme={theme}>
      <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:'calc(34px * var(--u))'}}>
        <In f={4}><Text role="display" style={{fontSize:'calc(108px * var(--u))'}}>让时长<br/>从内容<br/>长出来</Text></In>
        <In f={12}><Text role="subtitle" color="muted">阅读预算从字数长出来，<br/>加一行字，片子自己变长。</Text></In>
      </div>
    </Stage>
  );
}
window.TitleFrameP=TitleFrameP;