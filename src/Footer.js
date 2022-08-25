import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      <button>
        <FaTwitterSquare />
      </button>
      <button>
        <FaFacebookSquare />
      </button>
      <button>
        <FaInstagramSquare />
      </button>
      <button>
        <FaGithubSquare />
      </button>
    </footer>
  )
}