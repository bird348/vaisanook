import Unit_196101 from "./Unit_196101"
import Unit_296101 from "./Unit_296101"


export default function Home_96101({unit}) {
    return(
        <>
            คอมพิวเตอร์เบื้องต้น
            {unit == "1" && <Unit_196101 />}
            {unit == "2" && <Unit_296101 />}
        </>
    )
}