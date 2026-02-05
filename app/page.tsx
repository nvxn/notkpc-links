import { LinktreePage } from "@/components/linktree-page"
import linksData from "@/lib/links.json"

export default function Page() {
  return <LinktreePage data={linksData} />
}
