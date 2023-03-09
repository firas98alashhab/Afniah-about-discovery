let btnContainer = document.getElementById("navbar");
let btns = btnContainer.getElementsByClassName("btn");
let contentContainer = document.getElementById("content-container");
let contents = contentContainer.getElementsByClassName("content");
let aboutContent = document.getElementById("content-about");
let discoveryContent = document.getElementById("content-discovery");
let divisionsContent = document.getElementById("content-divisions");
let databaseContent = document.getElementById("content-database");
let centralArchiveContent = document.getElementById("content-central-archive");
let libraryAndECenterContent = document.getElementById("content-library-and-e-center");
let navbarPolicy = document.getElementById("paragraph-bg");
let paragraphText = document.getElementById("paragraph");
let afniahPolicy = document.getElementById("afniah-policy");
let codeOfEthics = document.getElementById("code-of-ethics");
let afniahFroms = document.getElementById("afniah forms");
let safetyAndHealthManual = document.getElementById("safety-and-health-manual");
let qualityManual = document.getElementById("quality-manual");
let afniahCADStandard = document.getElementById("afniah-cad-standard");

for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active");
    this.className += " active";
  })
}


function onClickDiscovery() {
  codeOfEthics.classList.remove("active");
  afniahPolicy.classList.remove("active");
  afniahFroms.classList.remove("active");
  safetyAndHealthManual.classList.remove("active");
  qualityManual.classList.remove("active");
  afniahCADStandard.classList.remove("active");
  aboutContent.style.display = "none";
  discoveryContent.style.display = "flex";
  divisionsContent.style.display = "none";
  databaseContent.style.display = "none";
  centralArchiveContent.style.display = "none";
  libraryAndECenterContent.style.display = "none";
  navbarPolicy.style.display = "none";
}

function onClickAbout() {
  aboutContent.style.display = "flex";
  discoveryContent.style.display = "none";
  divisionsContent.style.display = "none";
  databaseContent.style.display = "none";
  centralArchiveContent.style.display = "none";
  libraryAndECenterContent.style.display = "none";
}

function onClickDivisions() {
  divisionsContent.style.display = "flex";
  aboutContent.style.display = "none";
  discoveryContent.style.display = "none";
  databaseContent.style.display = "none";
  centralArchiveContent.style.display = "none";
  libraryAndECenterContent.style.display = "none";
}

function onClickDatabase() {
  databaseContent.style.display = "flex";
  divisionsContent.style.display = "none";
  aboutContent.style.display = "none";
  discoveryContent.style.display = "none";
  centralArchiveContent.style.display = "none";
  libraryAndECenterContent.style.display = "none";
}

function onClickCentralArchive() {
  centralArchiveContent.style.display = "flex";
  databaseContent.style.display = "none";
  divisionsContent.style.display = "none";
  aboutContent.style.display = "none";
  discoveryContent.style.display = "none";
  libraryAndECenterContent.style.display = "none";
}

function onClickLibraryAndECenter() {
  libraryAndECenterContent.style.display = "flex";
  centralArchiveContent.style.display = "none";
  databaseContent.style.display = "none";
  divisionsContent.style.display = "none";
  aboutContent.style.display = "none";
  discoveryContent.style.display = "none";
}

function onClickAfniahPolicy() {
  afniahPolicy.classList.add("active");
  codeOfEthics.classList.remove("active");
  afniahFroms.classList.remove("active");
  safetyAndHealthManual.classList.remove("active");
  qualityManual.classList.remove("active");
  afniahCADStandard.classList.remove("active");
  navbarPolicy.style.display = "block";
  paragraphText.innerText = 'Policy is a deliberate system of guidelines to guide decisions and achieve rational outcomes. A policy is a statement of intent and is implemented as a procedure or protocol. Policies are generally adopted by a governance body within an organization. Policies can assist in both subjective and objective decision making. Policies used in subjective decision-making usually assist senior management with decisions that must be based on the relative merits of a number of factors, and as a result, are often hard to test objectively, e.g. work–life balance policy... Moreover, Governments and other institutions have policies in the form of laws, regulations, procedures, administrative actions, incentives and voluntary practices. Frequently, resource allocations mirror policy decisions.' + 
  'Policy is a blueprint of the organizational activities which are repetitive/routine in nature.' + 'In contrast, policies to assist in objective decision-making are usually operational in nature and can be objectively tested, e.g. password policy.[1]' + 'The term may apply to government, public sector organizations and groups, as well as individuals, Presidential executive orders, corporate privacy policies, and parliamentary rules of order are all examples of policy. Policy differs from rules or law. While the law can compel or prohibit behaviors (e.g. a law requiring the payment of taxes on income), policy merely guides actions toward those that are most likely to achieve the desired outcome.[2]' + 
  'Policy or policy study may also refer to the process of making important organizational decisions, including the identification of different alternatives such as programs or spending priorities, and choosing among them on the basis of the impact they will have. Policies can be understood as political, managerial, financial, and administrative mechanisms arranged to reach explicit goals. In public corporate finance, a critical accounting policy is a policy for a firm/company or an industry that is considered to have a notably high subjective element, and that has a material impact on the financial statements.';
  document.appendChild(paragraphText);
}

function onClickCodeOfEthics() {
  codeOfEthics.classList.add("active");
  afniahPolicy.classList.remove("active");
  afniahFroms.classList.remove("active");
  safetyAndHealthManual.classList.remove("active");
  qualityManual.classList.remove("active");
  afniahCADStandard.classList.remove("active");
  navbarPolicy.style.display = "block";
  paragraphText.innerText = 'Code of Ethics';
  document.appendChild(paragraphText);
}

function onClickAfniahForms() {
  afniahFroms.classList.add("active");
  afniahPolicy.classList.remove("active");
  codeOfEthics.classList.remove("active");
  safetyAndHealthManual.classList.remove("active");
  qualityManual.classList.remove("active");
  afniahCADStandard.classList.remove("active");
  navbarPolicy.style.display = "block";
  paragraphText.innerText = 'Afniah Forms';
  document.appendChild(paragraphText);
}

function onClickSafetyAndHealthManual() {
  safetyAndHealthManual.classList.add("active");
  afniahFroms.classList.remove("active");
  afniahPolicy.classList.remove("active");
  codeOfEthics.classList.remove("active");
  qualityManual.classList.remove("active");
  afniahCADStandard.classList.remove("active");
  navbarPolicy.style.display = "block";
  paragraphText.innerText = 'Safety and Health Manual';
  document.appendChild(paragraphText);
}

function onClickQualityManual() {
  qualityManual.classList.add("active");
  afniahFroms.classList.remove("active");
  afniahPolicy.classList.remove("active");
  codeOfEthics.classList.remove("active");
  safetyAndHealthManual.classList.remove("active");
  afniahCADStandard.classList.remove("active");
  navbarPolicy.style.display = "block";
  paragraphText.innerText = 'Quality Manual';
  document.appendChild(paragraphText);
}

function onClickAfniahCDAStandard() {
  afniahCADStandard.classList.add("active");
  afniahFroms.classList.remove("active");
  afniahPolicy.classList.remove("active");
  codeOfEthics.classList.remove("active");
  safetyAndHealthManual.classList.remove("active");
  qualityManual.classList.remove("active");
  navbarPolicy.style.display = "block";
  paragraphText.innerText = 'Afniah CDA Standard';
  document.appendChild(paragraphText);
}

function updateTime() {
  let now = new Date();
  let options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  document.getElementById("local-time").innerText = "Time: " + Intl.DateTimeFormat('en-UK', options).format(now);
}

setInterval(updateTime, 1000);