import Link from "next/link";
import { Links } from "@/components/Links";
import { links } from "@/data/links";

export const Footer: React.FC = () => (
  <footer>
    <div>
      <Link href='/'>
        <a>UNFT</a>
      </Link>

      <p className='whitespace-nowrap font-bold text-[#A9A9A9] text-sm sm:text-base'>
        TRIP smart contract address:
        <br />
        <span
          className='text-white font-normal cursor-pointer'
          // onClick={() => {
          //   navigator.clipboard.writeText(
          //     "0x692f6bbea88da58268cce0fc92897e416eccc03c"
          //   );
          // }}
        >
          0x692f6bbea88da58268cce0fc92897e416eccc03c
        </span>
      </p>
    </div>
    <div>
      <span>Copyright © 2022 UNFT. All right reserve</span>

      <div>
        <Links links={links} />
      </div>

      <div>
        <Link href='privacy-policy'>Privacy Policy</Link>
        <Link href='terms'>Terms &#38; Conditions</Link>
      </div>
    </div>
  </footer>
);
