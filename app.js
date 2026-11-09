const SUPABASE_URL = "https://zbciytabqdzjtrnpsszg.supabase.co";
const SUPABASE_KEY = "sb_publishable_fUsVjKHcNey1o4lITSdM9A_NBOuUgVU";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const discursos = [[1,"Você conhece bem a Deus?"],[2,"Você vai sobreviver aos últimos dias?"],[3,"Você está avançando com a organização unida de Jeová?"],[4,"Que provas temos de que Deus existe?"],[5,"Você pode ter uma família feliz!"],[6,"O Dilúvio dos dias de Noé e você"],[7,"Imite a misericórdia de Jeová"],[8,"Viva para fazer a vontade de Deus"],[9,"Escute e faça o que a Bíblia diz"],[10,"Seja honesto em tudo"],[11,"Imite a Jesus e não faça parte do mundo"],[12,"Deus quer que você respeite quem tem autoridade"],[13,"Qual o ponto de vista de Deus sobre o sexo e o casamento?"],[14,"Um povo puro e limpo honra a Jeová"],[15,"‘Faça o bem a todos’"],[16,"Seja cada vez mais amigo de Jeová"],[17,"Glorifique a Deus com tudo o que você tem"],[18,"Faça de Jeová a sua fortaleza"],[19,"Como você pode saber seu futuro?"],[20,"Chegou o tempo de Deus governar o mundo?"],[21,"Dê valor ao seu lugar no Reino de Deus"],[22,"Você está usando bem o que Jeová lhe dá?"],[23,"A vida tem objetivo"],[24,"Você encontrou “uma pérola de grande valor”?"],[25,"Lute contra o espírito do mundo"],[26,"Você é importante para Deus?"],[27,"Como construir um casamento feliz"],[28,"Mostre respeito e amor no seu casamento"],[29,"As responsabilidades e recompensas de ter filhos"],[30,"Como melhorar a comunicação na família"],[31,"Você tem consciência da sua necessidade espiritual?"],[32,"Como lidar com as ansiedades da vida"],[33,"Quando vai existir verdadeira justiça?"],[34,"Você vai ser marcado para sobreviver?"],[35,"É possível viver para sempre? O que você precisa fazer?"],[36,"Será que a vida é só isso?"],[37,"Obedecer a Deus é mesmo a melhor coisa a fazer?"],[38,"Como você pode sobreviver ao fim do mundo?"],[39,"Jesus Cristo vence o mundo — Como e quando?"],[40,"O que vai acontecer em breve?"],[41,"Fiquem parados e vejam como Jeová os salvará"],[42,"O amor pode vencer o ódio?"],[43,"Tudo o que Deus nos pede é para o nosso bem"],[44,"Como os ensinos de Jesus podem ajudar você?"],[45,"Continue andando no caminho que leva à vida"],[46,"Fortaleça sua confiança em Jeová"],[47,"‘Tenha fé nas boas novas’"],[48,"Seja leal a Deus mesmo quando for testado"],[49,"Será que um dia a Terra vai ser limpa?"],[50,"Como sempre tomar as melhores decisões"],[51,"Será que a verdade da Bíblia está mudando a sua vida?"],[52,"Quem é o seu Deus?"],[53,"Você pensa como Deus?"],[54,"Fortaleça sua fé em Deus e em suas promessas"],[55,"Você está fazendo um bom nome perante Deus?"],[56,"Existe um líder em quem você pode confiar?"],[57,"Como suportar perseguição"],[58,"Quem são os verdadeiros seguidores de Cristo?"],[59,"(Não use.)"],[60,"Você tem um objetivo na vida?"],[61,"Nas promessas de quem você confia?"],[62,"Onde encontrar uma esperança real para o futuro?"],[63,"É possível encontrar a verdade?"],[64,"Você ama os prazeres ou a Deus?"],[65,"Como podemos ser pacíficos num mundo cheio de ódio"],[66,"Você também vai participar na colheita?"],[67,"Medite na Bíblia e nas criações de Jeová"],[68,"‘Continuem a perdoar uns aos outros liberalmente’"],[69,"Por que mostrar amor abnegado?"],[70,"Por que Deus merece sua confiança?"],[71,"‘Mantenha-se desperto’ — Por que e como?"],[72,"O amor identifica os cristãos verdadeiros"],[73,"Você tem “um coração sábio”?"],[74,"Os olhos de Jeová estão em todo lugar"],[75,"Mostre que você apoia o direito de Jeová governar"],[76,"Princípios bíblicos — Podem nos ajudar a lidar com os problemas atuais?"],[77,"“Sempre mostrem hospitalidade”"],[78,"Sirva a Jeová com um coração alegre"],[79,"Você vai escolher ser amigo de Deus?"],[80,"Você baseia sua esperança na ciência ou na Bíblia?"],[81,"Quem está qualificado para fazer discípulos?"],[82,"(Não use.)"],[83,"Será que os cristãos precisam obedecer aos Dez Mandamentos?"],[84,"Escapará do destino deste mundo?"],[85,"Boas notícias num mundo violento"],[86,"Como orar a Deus e ser ouvido por ele?"],[87,"Qual é a sua relação com Deus?"],[88,"Por que viver de acordo com os padrões da Bíblia?"],[89,"Quem tem sede da verdade, venha!"],[90,"Faça o máximo para alcançar a verdadeira vida!"],[91,"A presença do Messias e seu domínio"],[92,"O papel da religião nos assuntos do mundo"],[93,"Desastres naturais — Quando vão acabar?"],[94,"A religião verdadeira atende às necessidades da sociedade humana"],[95,"Não seja enganado pelo ocultismo!"],[96,"O que vai acontecer com as religiões?"],[97,"Permaneçamos inculpes em meio a uma geração pervertida"],[98,"“A cena deste mundo está mudando”"],[99,"Por que podemos confiar no que a Bíblia diz?"],[100,"Como fazer amizades fortes e verdadeiras"],[101,"Jeová é o “Grandioso Criador”"],[102,"Preste atenção à “palavra profética”"],[103,"Como você pode ter a verdadeira alegria?"],[104,"Pais, vocês estão construindo com materiais à prova de fogo?"],[105,"Somos consolados em todas as nossas tribulações"],[106,"Arruinar a Terra provocará retribuição divina"],[107,"Você está treinando bem a sua consciência?"],[108,"Você pode encarar o futuro com confiança!"],[109,"O Reino de Deus está próximo"],[110,"Deus vem primeiro na vida familiar bem-sucedida"],[111,"É possível que a humanidade seja completamente curada?"],[112,"Como mostrar amor num mundo egoísta"],[113,"Jovens — Como vocês podem ter uma vida feliz?"],[114,"Apreço pelas maravilhas da criação de Deus"],[115,"Não caia nas armadilhas de Satanás"],[116,"Escolha sabiamente com quem irá associar-se!"],[117,"Como vencer o mal com o bem"],[118,"Olhemos os jovens do ponto de vista de Jeová"],[119,"Por que é benéfico que os cristãos vivam separados do mundo"],[120,"Por que se submeter à regência de Deus agora"],[121,"Uma família mundial que será salva da destruição"],[122,"(Não use.)"],[123,"(Não use.)"],[124,"Razões para crer que a Bíblia é de autoria divina"],[125,"Por que a humanidade precisa de resgate"],[126,"Quem se salvará?"],[127,"O que acontece quando morremos?"],[128,"É o inferno um lugar de tormento ardente?"],[129,"O que a Bíblia diz sobre a Trindade?"],[130,"A Terra permanecerá para sempre"],[131,"Tome posição contra o Diabo!"],[132,"Ressurreição — A vitória sobre a morte!"],[133,"Tem importância o que cremos sobre a nossa origem?"],[134,"Será que os cristãos precisam guardar o sábado?"],[135,"A santidade da vida e do sangue"],[136,"Será que Deus aprova o uso de imagens na adoração?"],[137,"Ocorreram realmente os milagres da Bíblia?"],[138,"Viva com bom juízo num mundo depravado"],[139,"Sabedoria divina num mundo científico"],[140,"Quem é realmente Jesus Cristo?"],[141,"Quando terão fim os gemidos da criação humana?"],[142,"Por que refugiar-se em Jeová"],[143,"Confie no Deus de todo consolo"],[144,"Uma congregação leal sob a liderança de Cristo"],[145,"Quem é semelhante a Jeová, nosso Deus?"],[146,"Use a educação para louvar a Jeová"],[147,"Confie que Jeová tem o poder para nos salvar"],[148,"Você tem o mesmo conceito de Deus sobre a vida?"],[149,"O que significa “andar com Deus”?"],[150,"Este mundo está condenado à destruição?"],[151,"Jeová é “uma altura protetora” para seu povo"],[152,"Armagedom — Por que e quando?"],[153,"Tenha bem em mente o “atemorizante dia”!"],[154,"O governo humano é pesado na balança"],[155,"Chegou a hora do julgamento de Babilônia?"],[156,"O Dia do Juízo — Tempo de temor ou de esperança?"],[157,"Como os verdadeiros cristãos adornam o ensino divino"],[158,"Seja corajoso e confie em Jeová"],[159,"Como encontrar segurança num mundo perigoso"],[160,"Mantenha a identidade cristã!"],[161,"Por que Jesus sofreu e morreu?"],[162,"Seja liberto deste mundo em escuridão"],[163,"Por que temer o Deus verdadeiro?"],[164,"Será que Deus ainda está no controle?"],[165,"Os valores de quem você preza?"],[166,"Verdadeira fé — O que é e como mostrar"],[167,"Ajamos sabiamente num mundo insensato"],[168,"Você pode sentir-se seguro neste mundo atribulado!"],[169,"Por que ser orientado pela Bíblia?"],[170,"Quem está qualificado para governar a humanidade?"],[171,"Poderá viver em paz agora — E para sempre!"],[172,"Que reputação você tem perante Deus?"],[173,"Existe uma religião verdadeira do ponto de vista de Deus?"],[174,"Quem se qualificará para entrar no novo mundo de Deus?"],[175,"O que prova que a Bíblia é autêntica?"],[176,"Quando haverá verdadeira paz e segurança?"],[177,"Onde encontrar ajuda em tempos de aflição?"],[178,"Ande no caminho da integridade"],[179,"Rejeite as fantasias do mundo, empenhe-se pelas realidades do Reino"],[180,"A ressurreição — Por que essa esperança deve ser real para você"],[181,"Já é mais tarde do que você imagina?"],[182,"O que o Reino de Deus está fazendo por nós agora?"],[183,"Desvie seus olhos do que é fútil"],[184,"A morte é o fim de tudo?"],[185,"Será que a verdade influencia sua vida?"],[186,"Sirva em união com o povo feliz de Deus"],[187,"Por que um Deus amoroso permite a maldade?"],[188,"Você confia em Jeová?"],[189,"Ande com Deus e receba bênçãos para sempre"],[190,"Como se cumprirá a promessa de perfeita felicidade familiar"],[191,"Como o amor e a fé vencem o mundo"],[192,"Você está no caminho para a vida eterna?"],[193,"Os problemas de hoje logo serão coisa do passado"],[194,"Como a sabedoria de Deus nos ajuda"]];
const indisponiveis = new Set([59, 82, 84, 85, 87, 92, 94, 97, 105, 106, 109, 117, 119, 120, 122, 123, 124, 126, 139, 141, 144, 145, 148, 151, 154, 155, 157, 158, 163, 164, 165, 167, 168]);
let marcacoes = {};
let temasRiscados = new Set();
let usuarioAtual = null;
let isAdmin = false;
let temasExtrasCache = [];

function mostrarErro(msg) {
  const e=document.getElementById("authErro"); e.textContent=msg; e.style.display="block";
}
function status(msg) { document.getElementById("status").textContent=msg; }

async function entrar() {
  document.getElementById("authErro").style.display="none";
  const email=document.getElementById("email").value.trim();
  const senha=document.getElementById("senha").value;
  const {data,error}=await sb.auth.signInWithPassword({email, password:senha});
  if(error) return mostrarErro(error.message);
  usuarioAtual=data.user;
}
async function criarConta() {
  document.getElementById("authErro").style.display="none";
  const email=document.getElementById("email").value.trim();
  const senha=document.getElementById("senha").value;
  const {data,error}=await sb.auth.signUp({email, password:senha});
  if(error) return mostrarErro(error.message);
  if(data.session) usuarioAtual=data.user;
  else mostrarErro("Conta criada. Verifique o e-mail se o Supabase solicitar confirmação.");
}
async function sair() {
  await sb.auth.signOut();
}
async function carregar() {
  if(!usuarioAtual) return;
  const {data,error}=await sb.from("discurso_marcacoes_compartilhadas")
    .select("discurso_numero,status,riscado");
  if(error) { status("Não foi possível carregar as marcações compartilhadas. Execute o SQL de configuração incluído no ZIP."); console.error(error); return; }
  marcacoes={};
  temasRiscados=new Set();
  (data||[]).forEach(r=>{ marcacoes[r.discurso_numero]=r.status; if(r.riscado) temasRiscados.add(Number(r.discurso_numero)); });
  render();
  status("Marcações compartilhadas carregadas.");
}
async function salvar() {
  if(!usuarioAtual) return;
  const numeros=new Set([...Object.keys(marcacoes).map(Number),...temasRiscados]);
  const rows=[...numeros].map(numero=>({
    discurso_numero:Number(numero), status:marcacoes[numero]||"nao", riscado:temasRiscados.has(Number(numero)), atualizado_por:usuarioAtual.id
  }));
  if(rows.length) {
    const {error}=await sb.from("discurso_marcacoes_compartilhadas").upsert(rows,{onConflict:"discurso_numero"});
    if(error) { status("Erro ao salvar marcações: "+error.message); return; }
  }
  status("✓ Marcações compartilhadas salvas para todos.");
}
async function limpar() {
  if(!usuarioAtual || !isAdmin) return;
  if(!confirm("Deseja apagar todas as marcações compartilhadas? Esta ação afeta todos os usuários.")) return;
  const {error}=await sb.from("discurso_marcacoes_compartilhadas").delete().gte("discurso_numero",0);
  if(error) { status("Erro ao limpar: "+error.message); return; }
  marcacoes={}; render(); status("Marcações compartilhadas apagadas.");
}
function marcar(n,valor) {
  if(indisponiveis.has(n)) return;
  marcacoes[n]=valor; render();
  salvar();
}
function alternarRiscoTema(n) {
  if(temasRiscados.has(Number(n))) temasRiscados.delete(Number(n));
  else temasRiscados.add(Number(n));
  render();
  salvar();
}
function temasExtras() { return temasExtrasCache; }
async function carregarTemasExtras() {
  const {data,error}=await sb.from("discursos_temas_extras").select("numero,titulo").order("numero");
  if(error) { status("Não foi possível carregar temas compartilhados. Execute o SQL de configuração incluído no ZIP."); console.error(error); return; }
  temasExtrasCache=(data||[]).map(x=>({numero:Number(x.numero),titulo:x.titulo}));
}
function listaDiscursos() {
  const mapa = new Map(discursos.map(([n,t])=>[Number(n),t]));
  temasExtras().forEach(x=>mapa.set(Number(x.numero),x.titulo));
  return [...mapa.entries()].sort((a,b)=>a[0]-b[0]);
}
function chaveTema(t) { return String(t||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase(); }
function temaAtribuido(titulo) {
  const k=chaveTema(titulo);
  return oradores.some(o=>chaveTema(o.tema)===k);
}
function sincronizarTemasAtribuidos() {
  let alterou=false;
  for (const o of oradores) {
    const encontrado=listaDiscursos().find(([n,t])=>chaveTema(t)===chaveTema(o.tema));
    if(encontrado && marcacoes[encontrado[0]]!=="sim") {
      marcacoes[encontrado[0]]="sim";
      alterou=true;
    }
  }
  if(alterou && usuarioAtual) salvar();
}
async function adicionarTema() {
  const numeroEl=document.getElementById("novoTemaNumero");
  const tituloEl=document.getElementById("novoTemaTitulo");
  const titulo=tituloEl.value.trim();
  let numero=Number(numeroEl.value);
  if(!titulo) { alert("Digite o nome do tema."); return; }
  const todos=listaDiscursos();
  if(!numero) numero=Math.max(194,...todos.map(x=>x[0]))+1;
  if(todos.some(([n])=>n===numero)) {
    alert("Esse número já existe. Escolha outro número para o tema personalizado.");
    return;
  }
  const {error}=await sb.from("discursos_temas_extras").insert({numero,titulo,criado_por:usuarioAtual.id});
  if(error) { status("Não foi possível adicionar o tema: "+error.message); return; }
  await carregarTemasExtras();
  numeroEl.value=""; tituloEl.value=""; render(); atualizarResumo(); status("Tema adicionado e compartilhado com todos.");
}
async function removerTemaExtra(numero) {
  if(!isAdmin) return;
  if(!confirm("Remover este tema personalizado para todos os usuários?")) return;
  const {error}=await sb.from("discursos_temas_extras").delete().eq("numero",Number(numero));
  if(error) { status("Erro ao remover tema: "+error.message); return; }
  await carregarTemasExtras(); render(); atualizarResumo(); status("Tema removido.");
}
function preencherTemaPorNumero() {
  const numero=Number(document.getElementById("oradorNumero").value);
  const achado=listaDiscursos().find(([n])=>n===numero);
  if(achado) document.getElementById("oradorTema").value=achado[1];
}
function render() {
  const termo=document.getElementById("search").value.toLowerCase().trim();
  const lista=document.getElementById("lista"); lista.innerHTML="";
  listaDiscursos().filter(([n,t])=>!termo||String(n).includes(termo)||t.toLowerCase().includes(termo))
  .forEach(([n,t])=>{
    const d=document.createElement("div");
    const indis=indisponiveis.has(n) && discursos.some(([nn])=>nn===n);
    const atribuido=temaAtribuido(t);
    d.className="item"+(indis?" indisponivel":"");
    d.innerHTML=`
      <div class="numero">${n}</div>
      <div class="titulo ${temasRiscados.has(Number(n))?'tema-riscado':''}">${escapeHtml(t)} ${indis?'<span class="badge">NÃO DISPONÍVEL</span>':""} ${atribuido||marcacoes[n]==="sim"?'<span class="tema-atribuido">SIM · COM ORADOR</span>':""}</div>
      <div class="escolha">
        ${indis?"":`<button class="sim ${atribuido||marcacoes[n]==="sim"?"selecionado":""}" onclick="marcar(${n},'sim')">SIM</button>
        <button class="nao ${!atribuido&&marcacoes[n]==="nao"?"selecionado":""}" onclick="marcar(${n},'nao')">NÃO</button>`}
        <button class="secundario" onclick="alternarRiscoTema(${n})">${temasRiscados.has(Number(n))?'↩ Tirar risco':'／ Riscar tema'}</button>
        ${isAdmin && temasExtras().some(x=>Number(x.numero)===Number(n))?`<button class="secundario" onclick="removerTemaExtra(${n})">Remover tema</button>`:""}
      </div>`;
    lista.appendChild(d);
  });
}
document.getElementById("search").addEventListener("input",render);


async function exportarPlanilha() {
  if (!usuarioAtual) return;
  status('Preparando a planilha com os dados compartilhados...');
  const [rOradores,rMarcacoes,rExtras] = await Promise.all([
    sb.from('oradores').select('nome,tema,congregacao,telefone,endereco_local,data_discurso,horario,periodo,convite_enviado,created_at').order('data_discurso',{ascending:true}),
    sb.from('discurso_marcacoes_compartilhadas').select('discurso_numero,status,riscado,atualizado_em'),
    sb.from('discursos_temas_extras').select('numero,titulo,criado_em').order('numero')
  ]);
  const erro = rOradores.error || rMarcacoes.error || rExtras.error;
  if (erro) { status('Não foi possível exportar todos os dados: '+erro.message); return; }
  const dadosOradores=(rOradores.data||[]).map(o=>({Orador:o.nome,Tema:o.tema,Congregação:o.congregacao,WhatsApp:o.telefone,Endereço:o.endereco_local,Data:o.data_discurso,Horário:o.horario,Período:o.periodo,'Convite enviado':o.convite_enviado?'Sim':'Não','Criado em':o.created_at}));
  const mapaTemas=new Map(listaDiscursos().map(([numero,titulo])=>[numero,titulo]));
  const dadosTemas=[...mapaTemas.entries()].map(([numero,titulo])=>({Número:numero,Tema:titulo,Disponibilidade:indisponiveis.has(numero)?'Não disponível':'',Usado:temaAtribuido(titulo)||marcacoes[numero]==='sim'?'Sim':'Não',Riscado:temasRiscados.has(numero)?'Sim':'Não'}));
  const dadosMarcacoes=(rMarcacoes.data||[]).map(x=>({Número:x.discurso_numero,Tema:mapaTemas.get(Number(x.discurso_numero))||'',Status:x.status==='sim'?'Sim':'Não',Riscado:x.riscado?'Sim':'Não','Atualizado em':x.atualizado_em}));
  if (typeof XLSX === 'undefined') { status('Biblioteca de planilhas indisponível. Recarregue a página e tente novamente.'); return; }
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(dadosOradores),'Oradores');
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(dadosTemas),'Temas');
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(dadosMarcacoes),'Marcações');
  XLSX.writeFile(wb,'discursos-publicos-dados.xlsx');
  status('✓ Planilha Excel gerada com oradores, temas e marcações.');
}

sb.auth.onAuthStateChange(async (_event,session)=>{
  usuarioAtual=session?.user||null;
  document.getElementById("login").classList.toggle("oculto",!!usuarioAtual);
  document.getElementById("app").classList.toggle("oculto",!usuarioAtual);
  if(usuarioAtual){
    document.getElementById("usuario").textContent="Conta: "+usuarioAtual.email;
    const adminResult=await sb.from("site_admins").select("user_id").eq("user_id",usuarioAtual.id).maybeSingle();
    isAdmin=!!adminResult.data;
    document.getElementById("btnLimparMarcacoes")?.classList.toggle("oculto",!isAdmin);
    await carregarTemasExtras();
    await carregar();
    await carregarOradores();
    atualizarResumo();
    render();
  }
});


let oradores = [];
let abaAtual = 'discursos';
let visualizacaoOradores = 'lista';

function atualizarResumo() {
  const hoje=new Date(); hoje.setHours(0,0,0,0);
  const proximos=oradores.filter(o=>o.data_discurso && new Date(o.data_discurso+"T12:00:00")>=hoje);
  const a=document.getElementById("totalOradores"); if(a) a.textContent=String(oradores.length);
  const b=document.getElementById("totalProximos"); if(b) b.textContent=String(proximos.length);
  const c=document.getElementById("totalTemas"); if(c) c.textContent=String(listaDiscursos().length);
}

function abrirAba(aba) {
  abaAtual = aba;
  document.getElementById("abaDiscursos").classList.toggle("oculto", aba !== "discursos");
  document.getElementById("abaOradores").classList.toggle("oculto", aba !== "oradores");
  const tabDiscursos = document.getElementById("tabDiscursos");
  const tabOradores = document.getElementById("tabOradores");
  if (tabDiscursos) tabDiscursos.className = aba === "discursos" ? "primario" : "secundario";
  if (tabOradores) tabOradores.className = aba === "oradores" ? "primario" : "secundario";
  if (aba === "oradores") carregarOradores();
}

function alternarMenu(abrir) {
  const aberto = typeof abrir === 'boolean' ? abrir : !document.body.classList.contains('menu-aberto');
  document.body.classList.toggle('menu-aberto', aberto);
  const botao = document.querySelector('.menu-botao');
  if (botao) botao.setAttribute('aria-expanded', String(aberto));
}

function navegarMenu(destino) {
  alternarMenu(false);
  if (destino === 'inicio') {
    abrirAba('discursos');
    window.scrollTo({top:0, behavior:'smooth'});
    return;
  }
  if (destino === 'discursos') {
    abrirAba('discursos');
    document.getElementById('abaDiscursos').scrollIntoView({behavior:'smooth', block:'start'});
    return;
  }
  abrirAba('oradores');
  if (destino === 'agenda') {
    mudarVisualizacaoOradores('agenda');
    document.getElementById('listaOradores').scrollIntoView({behavior:'smooth', block:'start'});
  } else if (destino === 'oradores') {
    mudarVisualizacaoOradores('lista');
    document.getElementById('listaOradores').scrollIntoView({behavior:'smooth', block:'start'});
  } else if (destino === 'cadastro') {
    document.getElementById('formOrador').scrollIntoView({behavior:'smooth', block:'center'});
    setTimeout(() => document.getElementById('oradorNome').focus(), 350);
  } else if (destino === 'lembretes') {
    document.getElementById('painelLembretes').scrollIntoView({behavior:'smooth', block:'start'});
  }
}

async function carregarOradores() {
  if (!usuarioAtual) return;
  const {data,error}=await sb.from("oradores")
    .select("id,nome,tema,congregacao,telefone,endereco_local,data_discurso,horario,periodo,created_at,convite_enviado")
    .order("data_discurso",{ascending:true});
  if(error) {
    status("Não foi possível carregar os oradores. Confira se executou o arquivo atualizar_oradores.sql no Supabase.");
    console.error(error);
    return;
  }
  oradores=data||[];
  sincronizarTemasAtribuidos();
  renderOradores();
  renderLembretes();
  notificarLembretesDoDia();
  render();
  atualizarResumo();
}

function mudarVisualizacaoOradores(modo) {
  visualizacaoOradores = modo === 'agenda' ? 'agenda' : 'lista';
  document.getElementById('tabListaOradores').className = visualizacaoOradores === 'lista' ? 'primario' : 'secundario';
  document.getElementById('tabAgendaOradores').className = visualizacaoOradores === 'agenda' ? 'primario' : 'secundario';
  renderOradores();
}

function renderOradores() {
  const termo=(document.getElementById("buscarOrador")?.value||"").toLowerCase().trim();
  const lista=document.getElementById("listaOradores");
  const contadores=document.getElementById("contadoresOradores");
  if(!lista) return;
  const filtrados=oradores.filter(o =>
    !termo ||
    (o.nome||"").toLowerCase().includes(termo) ||
    (o.tema||"").toLowerCase().includes(termo) ||
    (o.congregacao||"").toLowerCase().includes(termo)
  );
  const enviados=filtrados.filter(o=>o.convite_enviado).length;
  if(contadores) contadores.innerHTML = `<span class="contador">Total: ${filtrados.length}</span><span class="contador">Convites enviados: ${enviados}</span><span class="contador">Pendentes: ${filtrados.length-enviados}</span>`;
  if(!filtrados.length) {
    lista.innerHTML='<div class="vazio">Nenhum orador cadastrado.</div>';
    return;
  }
  const ordenarPorNome = (a,b)=>(a.nome||'').localeCompare(b.nome||'', 'pt-BR');
  const ordenarPorData = (a,b)=>(a.data_discurso||'9999-12-31').localeCompare(b.data_discurso||'9999-12-31') || (a.horario||'').localeCompare(b.horario||'') || ordenarPorNome(a,b);
  const card = o => `
    <div class="orador-card">
      <div>
        <div class="orador-nome">${escapeHtml(o.nome)}</div>
        <div class="orador-detalhes"><strong>Tema:</strong> ${escapeHtml(o.tema)}<br><strong>Cong:</strong> ${escapeHtml(o.congregacao)}<br><strong>Data:</strong> ${formatarData(o.data_discurso)} &nbsp; <strong>Horário:</strong> ${escapeHtml(o.horario||"")} ${escapeHtml(o.periodo||"")}<br>${o.endereco_local?`<strong>Local:</strong> ${escapeHtml(o.endereco_local)}<br>`:""}${o.telefone?`<strong>WhatsApp:</strong> ${escapeHtml(o.telefone)}`:""}</div>
        <div class="orador-status ${o.convite_enviado ? 'enviado' : 'pendente'}">${o.convite_enviado ? '✓ Convite marcado como enviado' : '⏳ Convite pendente'}</div>
      </div>
      <div class="orador-acoes">
        <button class="primario" onclick="gerarConvite('${o.id}')">🖨️ Gerar convite</button>
        <button class="${o.convite_enviado ? 'btn-desfazer' : 'btn-enviado'}" onclick="alternarConviteEnviado('${o.id}',${!o.convite_enviado})">${o.convite_enviado ? '↩ Desfazer envio' : '✓ Marcar como enviado'}</button>
        <button class="secundario" onclick="editarOrador('${o.id}')">✏️ Editar</button>
        ${isAdmin ? `<button class="secundario" onclick="excluirOrador('${o.id}')">🗑️ Excluir</button>` : ""}
      </div>
    </div>`;
  if(visualizacaoOradores === 'lista') {
    lista.innerHTML = [...filtrados].sort(ordenarPorNome).map(card).join('');
    return;
  }
  const porData = [...filtrados].sort(ordenarPorData);
  let mesAtual = null, dataAtual = null, htmlAgenda = '';
  for (const o of porData) {
    const chaveMes = o.data_discurso ? o.data_discurso.slice(0,7) : 'sem-data';
    if (chaveMes !== mesAtual) {
      mesAtual = chaveMes; dataAtual = null;
      let rotuloMes = 'Sem data definida';
      if (chaveMes !== 'sem-data') {
        const [ano,mes] = chaveMes.split('-').map(Number);
        rotuloMes = new Date(ano,mes-1,1).toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
        rotuloMes = rotuloMes.charAt(0).toLocaleUpperCase('pt-BR') + rotuloMes.slice(1);
      }
      htmlAgenda += `<div class="agenda-mes">📅 ${escapeHtml(rotuloMes)}</div>`;
    }
    const chaveData = o.data_discurso || 'sem-data';
    if (chaveData !== dataAtual) {
      dataAtual = chaveData;
      htmlAgenda += `<div class="agenda-data">${chaveData === 'sem-data' ? 'Data não definida' : formatarData(chaveData)}</div>`;
    }
    htmlAgenda += card(o);
  }
  lista.innerHTML = htmlAgenda;
}

async function alternarConviteEnviado(id, enviado) {
  if(!usuarioAtual) return;
  const orador = oradores.find(o => o.id === id);
  if(!orador) return;
  const {error} = await sb.from('oradores')
    .update({convite_enviado: enviado})
    .eq('id', id);
  if(error) {
    status('Não foi possível atualizar o convite. Confira se executou atualizar_oradores.sql no Supabase.');
    console.error(error);
    return;
  }
  orador.convite_enviado = enviado;
  status(enviado ? '✓ Convite marcado como enviado.' : 'Envio desfeito; o convite voltou para pendente.');
  renderOradores();
}

function dataLembrete(dataDiscurso) {
  if (!dataDiscurso) return null;
  const d = new Date(dataDiscurso + "T12:00:00");
  d.setMonth(d.getMonth() - 1);
  return d;
}
function dataISOlocal(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function textoLembrete(o) {
  const endereco = (o.endereco_local || "[incluir endereço do local]").trim();
  return `Olá, irmão! Estamos enviando esta mensagem apenas para lembrar do seu discurso no dia ${formatarData(o.data_discurso)}.\n\nEndereço do local: ${endereco}\n\nAgradecemos pela sua ajuda!`;
}
function renderLembretes() {
  const alvo = document.getElementById("listaLembretes");
  if (!alvo) return;
  const hoje = dataISOlocal(new Date());
  const pendentes = oradores.filter(o => {
    if (!o.data_discurso) return false;
    const lembrete = dataLembrete(o.data_discurso);
    return dataISOlocal(lembrete) <= hoje && o.data_discurso >= hoje;
  }).sort((a,b)=>(a.data_discurso||"").localeCompare(b.data_discurso||""));
  if (!pendentes.length) {
    alvo.innerHTML = '<div class="vazio">Nenhum lembrete de um mês está pendente neste momento.</div>';
    return;
  }
  alvo.innerHTML = pendentes.map(o => {
    const temTelefone = String(o.telefone||"").replace(/\D/g,"").length >= 10;
    const wa = temTelefone ? `https://wa.me/${String(o.telefone).replace(/\D/g,"")}?text=${encodeURIComponent(textoLembrete(o))}` : "";
    return `<div class="orador-card"><div><div class="orador-nome">${escapeHtml(o.nome)}</div><div class="orador-detalhes"><strong>Discurso:</strong> ${formatarData(o.data_discurso)} · ${escapeHtml(o.tema)}<br><strong>Lembrete desde:</strong> ${formatarData(dataISOlocal(dataLembrete(o.data_discurso)))}<br><strong>Endereço:</strong> ${escapeHtml(o.endereco_local||"Não cadastrado")}</div></div><div class="orador-acoes"><button class="secundario" type="button" onclick="copiarLembrete('${o.id}')">📋 Copiar mensagem</button>${temTelefone?`<a href="${wa}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;text-decoration:none;background:#176b2c;color:white;padding:11px 14px;border-radius:10px;font-weight:700">Enviar pelo WhatsApp</a>`:`<span class="contador">Cadastre o WhatsApp</span>`}</div></div>`;
  }).join("");
}
async function copiarLembrete(id) {
  const o = oradores.find(item => String(item.id) === String(id));
  if (!o) return;
  const mensagem = textoLembrete(o);
  try {
    await navigator.clipboard.writeText(mensagem);
    status('✓ Mensagem de lembrete copiada. Agora é só colar no WhatsApp.');
  } catch (erro) {
    window.prompt('Copie a mensagem abaixo:', mensagem);
  }
}

function notificarLembretesDoDia() {
  if (!usuarioAtual || !("Notification" in window) || Notification.permission !== "granted") return;
  const hoje = dataISOlocal(new Date());
  oradores.forEach(o => {
    if (!o.data_discurso || dataISOlocal(dataLembrete(o.data_discurso)) !== hoje) return;
    const key = `lembrete-publico-${o.id}-${hoje}`;
    if (localStorage.getItem(key)) return;
    new Notification("Lembrete de discurso público", { body: `Falta um mês para o discurso de ${o.nome} (${formatarData(o.data_discurso)}). Abra o site para preparar o WhatsApp.` });
    localStorage.setItem(key, "1");
  });
}
async function ativarNotificacoesLembretes() {
  if (!("Notification" in window)) { alert("Este navegador não oferece notificações."); return; }
  const permission = await Notification.requestPermission();
  if (permission === "granted") { notificarLembretesDoDia(); alert("Notificações permitidas. Elas serão verificadas quando o site estiver aberto."); }
  else alert("As notificações não foram autorizadas nas configurações do navegador.");
}

function formatarData(valor) {
  if(!valor) return "";
  const [a,m,d]=valor.split("-");
  return a&&m&&d ? `${d}/${m}/${a.slice(-2)}` : valor;
}

function escapeHtml(valor) {
  return String(valor??"").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

async function salvarOrador(event) {
  event.preventDefault();
  if (!usuarioAtual) {
    status("Entre na sua conta antes de cadastrar um orador.");
    return;
  }

  const botao = document.getElementById("btnSalvarOrador");
  if (botao.disabled) return;

  const id = document.getElementById("oradorId").value.trim();
  const payload = {
    user_id: usuarioAtual.id,
    nome: document.getElementById("oradorNome").value.trim(),
    tema: document.getElementById("oradorTema").value.trim(),
    congregacao: document.getElementById("oradorCongregacao").value.trim(),
    telefone: document.getElementById("oradorTelefone").value.trim(),
    endereco_local: document.getElementById("oradorEndereco").value.trim(),
    data_discurso: document.getElementById("oradorData").value || null,
    horario: document.getElementById("oradorHorario").value || null,
    periodo: document.getElementById("oradorPeriodo").value || null
  };

  if (!payload.nome || !payload.tema || !payload.congregacao || !payload.data_discurso || !payload.horario) {
    status("Preencha nome, tema, congregação, data e horário.");
    return;
  }

  botao.disabled = true;
  const textoOriginal = botao.textContent;
  botao.textContent = id ? "Atualizando..." : "Salvando...";

  try {
    let result;
    if (id) {
      // O RLS do banco valida a sessão; o ID evita atualizar outro registro.
      result = await sb.from("oradores").update(payload).eq("id", id).select("id").maybeSingle();
    } else {
      result = await sb.from("oradores").insert(payload).select("id").single();
    }

    if (result.error) {
      console.error("Erro Supabase ao salvar orador:", result.error);
      const mensagem = result.error.message || "Erro desconhecido";
      if (/user_id|column.*does not exist|schema cache/i.test(mensagem)) {
        status("O banco ainda não está atualizado para o cadastro de oradores. Execute o arquivo atualizar_oradores.sql no SQL Editor do Supabase.");
      } else if (/row-level security| RLS|policy/i.test(mensagem)) {
        status("O Supabase bloqueou o cadastro pelas permissões (RLS). Execute atualizar_oradores.sql no Supabase e tente novamente.");
      } else {
        status("Não foi possível salvar o orador: " + mensagem);
      }
      return;
    }

    if (id && !result.data) {
      status("Nenhum registro foi atualizado. Confira se o orador ainda existe e se sua conta tem permissão.");
      return;
    }

    status(id ? "✓ Orador atualizado." : "✓ Orador salvo na internet.");
    limparFormularioOrador();
    await carregarOradores();
  } catch (erro) {
    console.error("Falha inesperada ao salvar orador:", erro);
    status("Falha de comunicação com o Supabase. Confira sua internet e tente novamente.");
  } finally {
    botao.disabled = false;
    botao.textContent = document.getElementById("oradorId").value ? "💾 Atualizar orador" : textoOriginal;
  }
}

function editarOrador(id) {
  const o=oradores.find(x=>x.id===id);
  if(!o) return;
  document.getElementById("oradorId").value=o.id;
  document.getElementById("oradorNome").value=o.nome||"";
  document.getElementById("oradorTema").value=o.tema||"";
  const temaEncontrado=listaDiscursos().find(([n,t])=>chaveTema(t)===chaveTema(o.tema));
  document.getElementById("oradorNumero").value=temaEncontrado?temaEncontrado[0]:"";
  document.getElementById("oradorCongregacao").value=o.congregacao||"";
  document.getElementById("oradorTelefone").value=o.telefone||"";
  document.getElementById("oradorEndereco").value=o.endereco_local||"";
  document.getElementById("oradorData").value=o.data_discurso||"";
  document.getElementById("oradorHorario").value=o.horario||"09:00";
  document.getElementById("oradorPeriodo").value=o.periodo||"Manhã";
  document.getElementById("btnSalvarOrador").textContent="💾 Atualizar orador";
  document.getElementById("btnCancelarEdicao").classList.remove("oculto");
  document.getElementById("oradorNome").focus();
}

function cancelarEdicao() { limparFormularioOrador(); }

function limparFormularioOrador() {
  document.getElementById("formOrador").reset();
  document.getElementById("oradorId").value="";
  document.getElementById("oradorNumero").value="";
  document.getElementById("btnSalvarOrador").textContent="💾 Salvar orador";
  document.getElementById("btnCancelarEdicao").classList.add("oculto");
}

async function excluirOrador(id) {
  if(!isAdmin) { status("Somente o administrador pode excluir oradores."); return; }
  const o=oradores.find(x=>x.id===id);
  if(!o || !confirm(`Excluir o orador "${o.nome}"?`)) return;
  const {error}=await sb.from("oradores").delete().eq("id",id);
  if(error) { status("Erro ao excluir: "+error.message); return; }
  status("Orador excluído.");
  await carregarOradores();
}

function gerarConvite(id) {
  const o=oradores.find(x=>x.id===id);
  if(!o) return;
  const janela=window.open("","_blank","width=900,height=1100");
  if(!janela) {
    alert("O navegador bloqueou a janela do convite. Permita pop-ups para este site.");
    return;
  }

  const nome=escapeHtml(o.nome||"");
  const congregacao=escapeHtml(o.congregacao||"");
  const nomeConvite=escapeHtml((o.nome||"")+(o.congregacao ? " | Cong: "+o.congregacao : ""));
  const tema=escapeHtml(o.tema||"");
  const horario=escapeHtml(o.horario||"09:00");
  const periodo=escapeHtml((o.periodo||"Manhã").replace("ã","a"));
  const dataObj=o.data_discurso ? new Date(o.data_discurso+"T12:00:00") : null;
  const data=dataObj ? String(dataObj.getDate()).padStart(2,"0")+"/"+String(dataObj.getMonth()+1).padStart(2,"0")+"/"+String(dataObj.getFullYear()).slice(-2) : "";
  const dia=dataObj ? dataObj.toLocaleDateString("pt-BR",{weekday:"long"}).replace(/^./,c=>c.toUpperCase()) : "";
  const modeloUrl=new URL("assets/convite-modelo-base.png",window.location.href).href;

  janela.document.write(`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Convite de Orador - ${nome}</title>
  <style>
    @page{size:A4;margin:0}
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:#ddd}
    body{font-family:Georgia,'Times New Roman',serif;color:#111;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    .pagina{width:210mm;min-height:297mm;margin:0 auto;position:relative;background:#fff;overflow:hidden}
    .modelo{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:fill}
    .cobertura{position:absolute;z-index:2}.cobertura.tema{left:18.0%;top:52.55%;width:74.0%;height:4.4%;background:#afbfd4}.cobertura.data{left:26.6%;top:57.55%;width:16.0%;height:7.0%;background:#fff}.cobertura.hora{left:68.6%;top:57.8%;width:12.0%;height:7.0%;background:#fff}.cobertura.orador{left:24.0%;top:66.45%;width:52.0%;height:4.0%;background:#afbfd4}.campo{position:absolute;z-index:3;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;font-family:Georgia,'Times New Roman',serif;font-weight:700;color:#111;text-align:center}
    .tema{left:18.45%;top:52.55%;width:71.8%;height:4.4%;font-size:16px;line-height:1.08;white-space:normal;overflow-wrap:anywhere;padding:0 2px}
    .data{left:27.0%;top:58.0%;width:15.0%;height:2.8%;font-size:clamp(8px,2.15vw,17px);white-space:nowrap}
    .dia{left:27.0%;top:61.55%;width:15.5%;height:2.8%;font-size:clamp(8px,2.15vw,17px);white-space:nowrap}
    .hora{left:68.5%;top:58.35%;width:12.0%;height:2.8%;font-size:clamp(8px,2.15vw,17px);white-space:nowrap}
    .periodo{left:68.5%;top:61.75%;width:12.5%;height:2.8%;font-size:clamp(8px,2.15vw,17px);white-space:nowrap}
    .orador{left:24.55%;top:66.9%;width:49%;height:3.0%;font-size:17px}
    .acoes{text-align:center;padding:10px;background:#eee;font-family:Arial,sans-serif}
    .acoes button{border:0;border-radius:8px;background:#1769aa;color:#fff;padding:11px 20px;font-weight:bold;cursor:pointer}
    @media print{html,body{background:#fff}.pagina{margin:0}.acoes{display:none}}
    @media(max-width:760px){
      body{background:#fff}
      .pagina{width:100vw;height:141.4286vw;min-height:0;margin:0;overflow:hidden}
      .acoes{position:sticky;bottom:0}
    }
    @media(max-width:380px){
      .tema{font-size:13px}
      .data,.dia,.hora,.periodo,.orador{font-size:14px}
      .acoes button{max-width:100%;padding:10px 12px}
    }
  </style></head><body>
  <div class="pagina">
    <img class="modelo" src="${modeloUrl}" alt="Modelo de convite">
    <div class="cobertura tema"></div><div class="cobertura data"></div><div class="cobertura hora"></div><div class="cobertura orador"></div>
    <div class="campo tema">${tema}</div>
    <div class="campo data">${data}</div>
    <div class="campo dia">${escapeHtml(dia)}</div>
    <div class="campo hora">${horario}</div>
    <div class="campo periodo">${periodo}</div>
    <div class="campo orador">${nomeConvite}</div>
  </div>
  <div class="acoes"><button onclick="window.print()">🖨️ Imprimir / Salvar como PDF</button></div>
  </body></html>`);
  janela.document.close();

  // Ajusta os textos depois que o convite e a imagem terminarem de carregar.
  const ajustarConvite = () => {
    try {
      const doc = janela.document;
      const temaEl = doc.querySelector(".campo.tema");
      const nomeEl = doc.querySelector(".campo.orador");
      if (nomeEl) {
        let tamanhoNome = 17;
        nomeEl.style.fontSize = tamanhoNome + "px";
        while (nomeEl.scrollWidth > nomeEl.clientWidth && tamanhoNome > 7) {
          tamanhoNome -= 0.5; nomeEl.style.fontSize = tamanhoNome + "px";
        }
      }
      if (temaEl) {
        let tamanho = 16;
        temaEl.style.fontSize = tamanho + "px";
        while ((temaEl.scrollHeight > temaEl.clientHeight + 1 ||
                temaEl.scrollWidth > temaEl.clientWidth + 1) && tamanho > 9) {
          tamanho -= 0.5;
          temaEl.style.fontSize = tamanho + "px";
        }
      }
      if (nomeEl) {
        let tamanhoNome = 17;
        nomeEl.style.fontSize = tamanhoNome + "px";
        while ((nomeEl.scrollWidth > nomeEl.clientWidth + 1 ||
                nomeEl.scrollHeight > nomeEl.clientHeight + 1) && tamanhoNome > 7) {
          tamanhoNome -= 0.5;
          nomeEl.style.fontSize = tamanhoNome + "px";
        }
      }
    } catch (e) {
      console.error("Não foi possível ajustar os textos do convite:", e);
    }
  };
  const imagemConvite = janela.document.querySelector(".modelo");
  if (imagemConvite) {
    if (imagemConvite.complete) ajustarConvite();
    else imagemConvite.addEventListener("load", ajustarConvite, { once: true });
    imagemConvite.addEventListener("error", () => {
      alert("A imagem do convite não foi encontrada. Confira se o arquivo está em assets/convite-modelo-base.png.");
    }, { once: true });
  }
  janela.addEventListener("load", ajustarConvite, { once: true });
  janela.setTimeout(ajustarConvite, 300);
  janela.focus();
}
