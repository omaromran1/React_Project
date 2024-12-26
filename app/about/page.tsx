import Link from "next/link";

function About() {
    return (
        < div >
        <h1> About Page</h1>
        </div >
    );
}

function Home(){
    return(
        <Link href="/">Go To Home</Link>
    )
}


function main(){
    return(
        <>
        <About/>
        <Home/>
        </>
    )
}

export default main;