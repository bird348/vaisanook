import Unit_110111 from "./Unit_110111"
import Unit_210111 from "./Unit_210111"


export default function Home_10111({unit}) {
    return(
        <>
            <h3>ภาษาอังกฤษเพื่อการสื่อสาร</h3>
           {unit == "1" && <Unit_110111 />}
           {unit == "2" && <Unit_210111 />}
        </>
    )
}