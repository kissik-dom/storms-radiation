import { useState } from "react";

const NAV = [
  ["🏠","Portal","https://central-portal-yums-projects-e09fdaf7.vercel.app"],
  ["🤖","AI","https://centillion-os-ai-yums-projects-e09fdaf7.vercel.app"],
  ["👑","Social","https://centillion-social-yums-projects-e09fdaf7.vercel.app"],
  ["🎬","UGC","https://ugc-marketplace-yums-projects-e09fdaf7.vercel.app"],
  ["🎵","Music","https://centillion-music-yums-projects-e09fdaf7.vercel.app"],
  ["📺","Stream","https://centillion-stream-yums-projects-e09fdaf7.vercel.app"],
  ["🏦","Bank","https://royal-bank-yums-projects-e09fdaf7.vercel.app"],
  ["🛡️","Shield","https://centillion-shield-yums-projects-e09fdaf7.vercel.app"],
];

const LAYERS = [
  { id: "atmospheric", icon: "🌪️", name: "Atmospheric Analysis", desc: "Barometric pressure, wind patterns, humidity, temperature anomalies" },
  { id: "electromagnetic", icon: "⚡", name: "Electromagnetic Signatures", desc: "RF emissions, HAARP-type frequencies, ionospheric disturbances, ELF/VLF signals" },
  { id: "chemical", icon: "☁️", name: "Chemical/Particulate Layer", desc: "Aerosol dispersal, barium/strontium/aluminum traces, cloud seeding agents" },
  { id: "radar", icon: "📡", name: "Radar & Satellite Overlay", desc: "Doppler anomalies, satellite imagery gaps, NEXRAD ring patterns" },
  { id: "timeline", icon: "🕐", name: "Timeline Correlation", desc: "Event sequence vs. natural formation patterns, speed of onset analysis" },
  { id: "records", icon: "📋", name: "Public Record Cross-Reference", desc: "Weather modification permits, NOAA reports, FOIA documents, patent filings" },
  { id: "historical", icon: "📊", name: "Historical Comparison", desc: "Compare against natural baseline data, frequency analysis, seasonal norms" },
  { id: "radiation", icon: "☢️", name: "Radiation Monitoring", desc: "Gamma/beta/alpha readings, EPA RadNet data, Geiger counter networks" },
];

const COMMANDS = [
  { cmd: "/analyze", desc: "Full multi-layer analysis of uploaded media" },
  { cmd: "/transcribe", desc: "Extract audio/video transcript with timestamps" },
  { cmd: "/compare", desc: "Compare event against historical weather baseline" },
  { cmd: "/permits", desc: "Search weather modification permits by state/date" },
  { cmd: "/radar", desc: "Pull NEXRAD/Doppler data for location & time" },
  { cmd: "/radiation", desc: "Query EPA RadNet for radiation readings" },
  { cmd: "/foia", desc: "Search FOIA documents related to weather programs" },
  { cmd: "/patents", desc: "Search patents for weather modification technology" },
  { cmd: "/timeline", desc: "Generate event timeline with anomaly markers" },
  { cmd: "/export", desc: "Export full investigation report as PDF" },
  { cmd: "/classify", desc: "Classify: NATURAL / MODIFIED / INCONCLUSIVE" },
  { cmd: "/sources", desc: "List all public data sources used in analysis" },
];

function App() {
  const [activeTab, setActiveTab] = useState("investigate");
  const [mediaUrl, setMediaUrl] = useState("");
  const [description, setDescription] = useState("");
  const [activeLayers, setActiveLayers] = useState(new Set(LAYERS.map(l => l.id)));

  const toggleLayer = (id: string) => {
    const next = new Set(activeLayers);
    next.has(id) ? next.delete(id) : next.add(id);
    setActiveLayers(next);
  };

  const s = {
    page: { minHeight:"100vh", background:"linear-gradient(135deg,#0a0a0a 0%,#0d1117 50%,#0a0a0a 100%)", fontFamily:"'Inter',-apple-system,sans-serif", color:"#fff" } as React.CSSProperties,
    nav: { position:"fixed" as const,top:0,left:0,right:0,zIndex:100,background:"rgba(10,10,10,0.95)",backdropFilter:"blur(10px)",borderBottom:"1px solid #D4AF3722",padding:"0.5rem 1rem",display:"flex",alignItems:"center",gap:"0.5rem",overflowX:"auto" as const },
    content: { maxWidth:"1100px",margin:"0 auto",padding:"5rem 1.5rem 3rem" },
    gold: "#D4AF37",
    card: { background:"#111827",border:"1px solid #1f2937",borderRadius:"12px",padding:"1.25rem" },
  };

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <span style={{fontWeight:800,color:s.gold,fontSize:"0.9rem",marginRight:"0.5rem",whiteSpace:"nowrap"}}>KISSI KINGDOM</span>
        <div style={{display:"flex",gap:"0.25rem",alignItems:"center"}}>
          {NAV.map(([icon,label,url]) => (
            <a key={label} href={url} style={{padding:"0.4rem 0.75rem",borderRadius:"6px",textDecoration:"none",fontSize:"0.8rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem",color:"#999"}}>{icon} {label}</a>
          ))}
          <span style={{padding:"0.4rem 0.75rem",borderRadius:"6px",fontSize:"0.8rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.3rem",background:s.gold,color:"#000"}}>⛈️ Storms</span>
        </div>
      </nav>

      <div style={s.content}>
        <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
          <div style={{fontSize:"3.5rem",marginBottom:"0.5rem"}}>⛈️☢️</div>
          <h1 style={{fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:800,background:`linear-gradient(135deg,${s.gold},#fff,${s.gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"0.25rem"}}>Storms & Radiation</h1>
          <p style={{color:s.gold,fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",fontSize:"0.95rem"}}>Weather Investigation Intelligence</p>
          <p style={{color:"#666",marginTop:"0.5rem",maxWidth:"600px",margin:"0.5rem auto 0"}}>Insert video or audio evidence. Every weather incident gets broken into analytical layers. Investigate whether it was created, modified, or noted on public record.</p>
        </div>

        {/* Tabs */}
        <div style={{display:"flex",gap:"0.5rem",marginBottom:"1.5rem",borderBottom:"1px solid #1f2937",paddingBottom:"0.75rem"}}>
          {[["investigate","🔍 Investigate"],["layers","📊 Analysis Layers"],["commands","⌨️ Commands"],["database","🗄️ Records"]].map(([id,label]) => (
            <button key={id} onClick={()=>setActiveTab(id)} style={{padding:"0.6rem 1.2rem",borderRadius:"8px",border:"none",cursor:"pointer",fontWeight:600,fontSize:"0.85rem",background:activeTab===id?s.gold:"#1f2937",color:activeTab===id?"#000":"#999"}}>{label}</button>
          ))}
        </div>

        {/* Investigate Tab */}
        {activeTab === "investigate" && (
          <div style={{display:"grid",gap:"1.25rem"}}>
            <div style={s.card}>
              <h3 style={{color:s.gold,marginBottom:"1rem",fontSize:"1.1rem"}}>📎 Upload Evidence</h3>
              <div style={{border:"2px dashed #374151",borderRadius:"10px",padding:"2.5rem",textAlign:"center",marginBottom:"1rem"}}>
                <div style={{fontSize:"2.5rem",marginBottom:"0.5rem"}}>🎥 🎙️ 📸</div>
                <p style={{color:"#888",marginBottom:"0.75rem"}}>Drag & drop video, audio, or images here</p>
                <button style={{padding:"0.6rem 1.5rem",background:s.gold,color:"#000",border:"none",borderRadius:"8px",fontWeight:700,cursor:"pointer"}}>Select Files</button>
              </div>
              <div style={{display:"flex",gap:"0.75rem",alignItems:"center"}}>
                <span style={{color:"#666",fontSize:"0.85rem"}}>Or paste URL:</span>
                <input value={mediaUrl} onChange={e=>setMediaUrl(e.target.value)} placeholder="https://youtube.com/watch?v=... or direct media URL" style={{flex:1,padding:"0.6rem 1rem",background:"#0d1117",border:"1px solid #374151",borderRadius:"8px",color:"#fff",fontSize:"0.9rem"}} />
              </div>
            </div>

            <div style={s.card}>
              <h3 style={{color:s.gold,marginBottom:"0.75rem",fontSize:"1.1rem"}}>📝 Event Description</h3>
              <textarea value={description} onChange={e=>setDescription(e.target.value)} rows={4} placeholder="Describe the weather event — location, date/time, what you observed, any anomalies..." style={{width:"100%",padding:"0.75rem 1rem",background:"#0d1117",border:"1px solid #374151",borderRadius:"8px",color:"#fff",fontSize:"0.9rem",resize:"vertical",boxSizing:"border-box"}} />
            </div>

            <div style={s.card}>
              <h3 style={{color:s.gold,marginBottom:"0.75rem",fontSize:"1.1rem"}}>🔬 Active Analysis Layers</h3>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"0.5rem"}}>
                {LAYERS.map(l => (
                  <label key={l.id} onClick={()=>toggleLayer(l.id)} style={{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 0.75rem",background:activeLayers.has(l.id)?"#D4AF3715":"#0d1117",border:`1px solid ${activeLayers.has(l.id)?s.gold+"44":"#1f2937"}`,borderRadius:"8px",cursor:"pointer",fontSize:"0.82rem"}}>
                    <span>{l.icon}</span>
                    <span style={{color:activeLayers.has(l.id)?"#fff":"#666"}}>{l.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <button style={{padding:"1rem",background:`linear-gradient(135deg,${s.gold},#b8941f)`,color:"#000",border:"none",borderRadius:"10px",fontWeight:800,fontSize:"1.1rem",cursor:"pointer",letterSpacing:"0.05em"}}>
              ⚡ RUN FULL INVESTIGATION
            </button>
          </div>
        )}

        {/* Layers Tab */}
        {activeTab === "layers" && (
          <div style={{display:"grid",gap:"1rem"}}>
            {LAYERS.map((l,i) => (
              <div key={l.id} style={{...s.card,display:"flex",gap:"1rem",alignItems:"flex-start"}}>
                <div style={{fontSize:"2rem",minWidth:"2.5rem",textAlign:"center"}}>{l.icon}</div>
                <div>
                  <h3 style={{color:s.gold,marginBottom:"0.25rem",fontSize:"1rem"}}>Layer {i+1}: {l.name}</h3>
                  <p style={{color:"#888",fontSize:"0.9rem",lineHeight:1.5}}>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Commands Tab */}
        {activeTab === "commands" && (
          <div style={s.card}>
            <h3 style={{color:s.gold,marginBottom:"1rem",fontSize:"1.1rem"}}>⌨️ Command Reference</h3>
            <div style={{display:"grid",gap:"0.5rem"}}>
              {COMMANDS.map(c => (
                <div key={c.cmd} style={{display:"flex",gap:"1rem",padding:"0.6rem 0.75rem",background:"#0d1117",borderRadius:"8px",alignItems:"center"}}>
                  <code style={{color:s.gold,fontWeight:700,fontSize:"0.9rem",minWidth:"120px",fontFamily:"'JetBrains Mono',monospace"}}>{c.cmd}</code>
                  <span style={{color:"#888",fontSize:"0.85rem"}}>{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Database Tab */}
        {activeTab === "database" && (
          <div style={{display:"grid",gap:"1rem"}}>
            <div style={s.card}>
              <h3 style={{color:s.gold,marginBottom:"0.75rem"}}>🗄️ Investigation Records</h3>
              <p style={{color:"#888",fontSize:"0.9rem",marginBottom:"1rem"}}>All weather investigations are stored and cross-referenced for pattern detection.</p>
              <div style={{background:"#0d1117",borderRadius:"8px",padding:"2rem",textAlign:"center",border:"1px dashed #374151"}}>
                <p style={{color:"#555"}}>No investigations yet. Run your first analysis to populate the database.</p>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"0.75rem"}}>
              {[["Weather Mod Permits","Federal & state permits for cloud seeding, hail suppression"],["FOIA Documents","Declassified weather program documents"],["Patent Database","Weather modification technology patents"],["RadNet Readings","EPA radiation monitoring network data"]].map(([t,d]) => (
                <div key={t} style={{...s.card,textAlign:"center"}}>
                  <h4 style={{color:s.gold,fontSize:"0.9rem",marginBottom:"0.25rem"}}>{t}</h4>
                  <p style={{color:"#666",fontSize:"0.75rem"}}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{textAlign:"center",marginTop:"3rem",color:"#333",fontSize:"0.8rem"}}>
          Kissi Kingdom • Centillion OS • Storms & Radiation Intelligence v1.0
        </div>
      </div>
    </div>
  );
}

export default App;
