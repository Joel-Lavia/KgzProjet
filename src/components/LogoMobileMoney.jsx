import Logo from "../data/Data.json"
function LogoMobileMoney() {
    const logo = Logo.logo.map((allLogo) => {
        return(
        <div key={allLogo.id}>
        <p><img src={allLogo.Logo} alt="logo" className="max-w-14 rounded-full" /></p>
        </div>
        )
    })    
return(
    <>
    <p className="flex items-center justify-center gap-9">
    {logo}
    </p>
    </>
) 
}
export default LogoMobileMoney