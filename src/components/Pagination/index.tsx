import { ArrowIcon } from "@/assets/svg";

type Props = {
  page: number;
  count: number;
  pageSize: number;
  onPageChange: (page: number) => () => void;
};

export const Pagination: React.FC<Props> = ({
  page,
  count,
  pageSize,
  onPageChange,
}) => (
  <div className='flex items-center space-x-6'>
    <div className='flex space-x-2'>
      {Array.from(Array(Math.ceil(pageSize ? count / pageSize : 1)).keys()).map(
        (i) => (
          <div
            key={i}
            className={`h-1 w-5 rounded-sm transition ease-in-out duration-200 ${
              page === i + 1 ? "bg-[#F8D47A]" : "bg-[#322A18]"
            }`}
          ></div>
        )
      )}
    </div>

    <div className='flex space-x-2'>
      <button
        className='w-12 h-[50px] pt-5 pb-[21px] pl-[16px] pr-4 rounded-xl bg-[#322A18] fill-[#F8D47A] hover:bg-[#F8D47A] hover:fill-[#0A0B0F] disabled:opacity-40 disabled:hover:bg-[#322A18] disabled:hover:fill-[#F8D47A] transition ease-in-out duration-200'
        type='button'
        onClick={onPageChange(page - 1)}
        disabled={page === 1}
      >
        <ArrowIcon className='rotate-180' />
      </button>

      <button
        className='w-12 h-[50px] pt-5 pb-[21px] pr-[16px] pl-4 rounded-xl bg-[#322A18] fill-[#F8D47A] hover:bg-[#F8D47A] hover:fill-[#0A0B0F] disabled:opacity-40 disabled:hover:bg-[#322A18] disabled:hover:fill-[#F8D47A] transition ease-in-out duration-200'
        type='button'
        onClick={onPageChange(page + 1)}
        disabled={page === Math.ceil(count / pageSize)}
      >
        <ArrowIcon />
      </button>
    </div>
  </div>
);
