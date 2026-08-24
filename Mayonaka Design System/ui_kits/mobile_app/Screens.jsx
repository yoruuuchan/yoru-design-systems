// Mobile Midnight FM — phone frame + screens

function PhoneFrame({ children }) {
  return (
    <div style={{
      width: 390, height: 844, background: "#000", borderRadius: 48,
      border: "4px solid #1a1a1a", padding: 12, boxShadow: "0 30px 80px rgba(255,43,214,.25), 0 10px 30px rgba(0,0,0,.6)",
      position: "relative",
    }}>
      <div style={{
        position: "absolute", left: "50%", top: 22, transform: "translateX(-50%)",
        width: 120, height: 30, background: "#000", borderRadius: 20, zIndex: 5,
      }}/>
      <div style={{
        width: "100%", height: "100%", borderRadius: 36, overflow: "hidden",
        background: "var(--bg-void)", position: "relative", color: "var(--text-primary)",
        fontFamily: "var(--font-body)",
      }}>
        <StatusBar/>
        {children}
      </div>
    </div>
  );
}

function StatusBar(){
  return (
    <div style={{
      position: "absolute", top:0, left:0, right:0, height:48, padding:"14px 32px 0",
      display:"flex", justifyContent:"space-between", alignItems:"center", zIndex:4,
      fontFamily:"var(--font-display)", fontSize:11, color:"var(--text-primary)", letterSpacing:".1em",
    }}>
      <span>3:42</span>
      <span style={{display:"flex", gap:6, alignItems:"center"}}>
        <span style={{fontSize:9}}>5G</span>
        <i data-lucide="signal" style={{width:14,height:14}}></i>
        <i data-lucide="battery-full" style={{width:18,height:14, color:"var(--success)"}}></i>
      </span>
    </div>
  );
}

function PlayerScreen({ onMenu }){
  const [playing, setPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(42);
  const [liked, setLiked] = React.useState(false);

  React.useEffect(()=>{ window.lucide && window.lucide.createIcons(); });

  return (
    <div style={{height:"100%", padding:"60px 22px 22px", display:"flex", flexDirection:"column", gap:20, position:"relative", overflow:"hidden"}}>
      <div style={{position:"absolute", inset:0, background:"var(--scanlines)", opacity:.4, pointerEvents:"none", zIndex:2}}/>

      {/* TOP NAV */}
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <button onClick={onMenu} style={{all:"unset", cursor:"pointer", color:"var(--text-secondary)"}}>
          <i data-lucide="chevron-down" style={{width:22,height:22}}></i>
        </button>
        <div style={{textAlign:"center"}}>
          <div style={{fontFamily:"var(--font-display)", fontSize:8, letterSpacing:".2em", color:"var(--text-muted)"}}>// NOW PLAYING</div>
          <div style={{fontFamily:"var(--font-jp)", fontSize:14, color:"var(--text-primary)"}}>夜の高速ミックス</div>
        </div>
        <button style={{all:"unset", cursor:"pointer", color:"var(--text-secondary)"}}>
          <i data-lucide="more-horizontal" style={{width:22,height:22}}></i>
        </button>
      </div>

      {/* ALBUM ART */}
      <div style={{
        width:"100%", aspectRatio:"1/1", border:"2px solid var(--magenta)",
        animation:"mnk-pulse-magenta 3.2s ease-in-out infinite",
        background:"linear-gradient(180deg, #0a1654 0%, #2d6cff 35%, #ff2bd6 75%, #ff71ce 100%)",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{position:"absolute", inset:0, background:"repeating-linear-gradient(to bottom, transparent 0 2px, rgba(0,0,0,.3) 3px 4px)", pointerEvents:"none"}}/>
        <div style={{position:"absolute", left:14, top:14, fontFamily:"var(--font-display)", fontSize:9, color:"#fff", letterSpacing:".2em", textShadow:"0 0 6px rgba(0,0,0,.8)"}}>SIDE A · 01</div>
        <div style={{position:"absolute", right:14, top:14, fontFamily:"var(--font-jp)", fontSize:26, color:"#fff", textShadow:"0 0 8px rgba(0,0,0,.6)"}}>夜景</div>
        <div style={{position:"absolute", left:"50%", top:"42%", transform:"translate(-50%,-50%)", width:160, height:160, borderRadius:"50%", background:"radial-gradient(circle, #ffcc66 0%, #ff71ce 55%, #ff2bd6 100%)", boxShadow:"0 0 80px rgba(255,113,206,.7)", animation:"mnk-sun-spin 14s linear infinite"}}/>
        <div style={{
          position:"absolute", left:0, right:0, bottom:0, height:"45%",
          background:
            "linear-gradient(transparent 0,transparent calc(100% - 2px),var(--magenta) 100%)," +
            "repeating-linear-gradient(90deg, transparent 0 calc(8% - 2px), var(--magenta) calc(8% - 2px) 8%)," +
            "repeating-linear-gradient(0deg, transparent 0 calc(16% - 2px), var(--magenta) calc(16% - 2px) 16%)",
          transform:"perspective(220px) rotateX(60deg)", transformOrigin:"bottom",
        }}/>
      </div>

      {/* TRACK */}
      <div>
        <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12}}>
          <div style={{minWidth:0, flex:1}}>
            <div style={{fontFamily:"var(--font-jp)", fontSize:26, color:"var(--text-primary)", lineHeight:1.1}}>夜の高速</div>
            <div style={{fontFamily:"var(--font-display)", fontSize:10, letterSpacing:".14em", color:"var(--cyan)", textShadow:"var(--text-glow-cyan)", marginTop:6}}>NIGHT HIGHWAY</div>
            <div style={{fontSize:15, color:"var(--text-secondary)", marginTop:6}}>Mariya Takeuchi  ／  VARIETY</div>
          </div>
          <button onClick={()=>setLiked(!liked)} style={{all:"unset", cursor:"pointer", color: liked ? "var(--magenta)" : "var(--text-muted)", padding:6}}>
            <i data-lucide={liked ? "heart" : "heart"} style={{width:24, height:24, fill: liked ? "var(--magenta)" : "none"}}></i>
          </button>
        </div>
      </div>

      {/* PROGRESS */}
      <div>
        <div style={{height:8, background:"var(--bg-void)", border:"2px solid var(--border-default)", position:"relative"}}>
          <div style={{position:"absolute", inset:0, width:`${progress}%`, background:"repeating-linear-gradient(90deg, var(--magenta) 0 8px, transparent 8px 10px)", boxShadow:"var(--glow-magenta-sm)"}}/>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", marginTop:6, fontFamily:"var(--font-display)", fontSize:9, color:"var(--text-muted)", letterSpacing:".1em"}}>
          <span>01:53</span><span>04:30</span>
        </div>
      </div>

      {/* TRANSPORT */}
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0 8px"}}>
        <button style={tBtn()}><i data-lucide="shuffle" style={{width:18,height:18}}></i></button>
        <button style={tBtn()}><i data-lucide="skip-back" style={{width:24,height:24}}></i></button>
        <button onClick={()=>setPlaying(p=>!p)} style={{
          width:68, height:68, border:"3px solid var(--magenta)", background:"var(--magenta)",
          color:"var(--void)", cursor:"pointer", boxShadow:"var(--shadow-pixel), var(--glow-magenta)",
          display:"grid", placeItems:"center",
        }}><i data-lucide={playing ? "pause" : "play"} style={{width:28,height:28}}></i></button>
        <button style={tBtn()}><i data-lucide="skip-forward" style={{width:24,height:24}}></i></button>
        <button style={tBtn()}><i data-lucide="repeat" style={{width:18,height:18}}></i></button>
      </div>

      {/* META BAR */}
      <div style={{marginTop:"auto", display:"flex", justifyContent:"space-between", alignItems:"center", fontFamily:"var(--font-display)", fontSize:8, color:"var(--text-muted)", letterSpacing:".18em"}}>
        <span>▸ AIRPODS PRO</span>
        <span>// 88.3 FM</span>
        <span>▤ QUEUE</span>
      </div>
    </div>
  );
}

function tBtn(){
  return { all:"unset", cursor:"pointer", width:44, height:44, display:"grid", placeItems:"center", color:"var(--text-secondary)" };
}

function BrowseScreen({ onOpen }){
  React.useEffect(()=>{ window.lucide && window.lucide.createIcons(); });
  const mixes = [
    { jp:"夜の高速",   en:"NIGHT HIGHWAY",  grad:"linear-gradient(135deg,#0a1654,#2d6cff,#ff2bd6)" },
    { jp:"雨と街",     en:"RAIN + CITY",     grad:"linear-gradient(135deg,#0a1654,#00b3ff,#ff71ce)" },
    { jp:"プラスチック・ラブ", en:"PLASTIC LOVE", grad:"linear-gradient(135deg,#2d6cff,#ff2bd6,#ff71ce)" },
    { jp:"真夜中のドア", en:"MIDNIGHT DOOR",  grad:"linear-gradient(135deg,#07000f,#3a1a8a,#ff2bd6)" },
  ];
  return (
    <div style={{height:"100%", padding:"60px 22px 22px", display:"flex", flexDirection:"column", gap:16, overflowY:"auto"}}>
      <div>
        <div style={{fontFamily:"var(--font-display)", fontSize:9, letterSpacing:".2em", color:"var(--text-muted)"}}>// 03:42 JST</div>
        <div style={{fontFamily:"var(--font-jp)", fontSize:30, color:"var(--text-primary)", lineHeight:1.1, marginTop:4}}>こんばんは、</div>
        <div style={{fontFamily:"var(--font-display)", fontSize:14, letterSpacing:".16em", color:"var(--magenta)", textShadow:"var(--text-glow-magenta)", marginTop:8}}>GOOD EVENING_</div>
      </div>

      <div style={{
        padding:14, border:"2px solid var(--cyan)", boxShadow:"var(--glow-cyan-sm)", background:"var(--bg-card)",
        display:"flex", justifyContent:"space-between", alignItems:"center",
      }}>
        <div>
          <div style={{fontFamily:"var(--font-display)", fontSize:9, letterSpacing:".18em", color:"var(--cyan)", animation:"mnk-flicker 3.4s linear infinite"}}>● ON AIR · 88.3</div>
          <div style={{fontFamily:"var(--font-jp)", fontSize:16, marginTop:6}}>深夜便ライブ</div>
          <div style={{fontSize:13, color:"var(--text-muted)", marginTop:2}}>2,049 listeners</div>
        </div>
        <button onClick={onOpen} style={{
          all:"unset", cursor:"pointer", padding:"10px 14px", border:"2px solid var(--magenta)", background:"var(--magenta)",
          color:"var(--void)", fontFamily:"var(--font-display)", fontSize:10, letterSpacing:".14em", boxShadow:"var(--shadow-pixel-sm)",
        }}>TUNE IN</button>
      </div>

      <div>
        <div style={{fontFamily:"var(--font-display)", fontSize:9, letterSpacing:".2em", color:"var(--text-muted)", marginBottom:10}}>// MIXTAPES_</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
          {mixes.map((m,i)=>(
            <div key={i} onClick={onOpen} style={{cursor:"pointer", border:"2px solid var(--border-default)"}}>
              <div style={{height:120, background:m.grad, position:"relative"}}>
                <div style={{position:"absolute", inset:0, background:"repeating-linear-gradient(to bottom, transparent 0 2px, rgba(0,0,0,.25) 3px 4px)"}}/>
                <div style={{position:"absolute", left:8, bottom:6, fontFamily:"var(--font-jp)", fontSize:18, color:"#fff", textShadow:"0 0 6px rgba(0,0,0,.7)"}}>{m.jp}</div>
              </div>
              <div style={{padding:"8px 10px", fontFamily:"var(--font-display)", fontSize:8, letterSpacing:".14em", color:"var(--text-secondary)"}}>{m.en}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.MNK_PhoneFrame = PhoneFrame;
window.MNK_PlayerScreen = PlayerScreen;
window.MNK_BrowseScreen = BrowseScreen;
