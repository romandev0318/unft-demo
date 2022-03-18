import { BtnLinks } from "@/components/BtnLinks";
import { btnLinks } from "@/data/links";

export const Contacts: React.FC = () => (
  <>
    <strong>Got a question or proposal?</strong>
    <p>
      Send an email to <span>unft@support.com</span> or find us on social media
      using the links
    </p>
    <BtnLinks links={btnLinks} />
  </>
);
