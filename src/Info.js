import photo from "./shaun.jpg"
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"

export default function Info() {
  return (
    <section className="info">
      <div id="profile-picture" />
      <h1>Shaun Niel Ochavo</h1>
      <h3>Frontend Developer</h3>
      <h5>shaunniel.website</h5>
      <div className="buttons">
        <button className="email">
          <MdEmail />
          Email
        </button>
        <button className="linkedin">
          <FaLinkedin />
          LinkedIn
        </button>        
      </div>
    </section>
  )
}