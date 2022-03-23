import { useMemo, useState } from "react";
import { Pagination } from "@/components/Pagination";
import { ShowcaseCard } from "@/components/ShowcaseCard";
import { useWindowWidth } from "@/utils/useWindowSize";
import { showcase } from "@/data/nfts";

const getPageSizeByWindowWdth = (windowWidth: undefined | number) => {
  if (!windowWidth) return 0;

  if (windowWidth < 768) return 3;

  if (windowWidth < 1024) return 4;

  return 6;
};

export const Showcase: React.FC = () => {
  const windowWidth = useWindowWidth();
  const pageSize = useMemo(
    () => getPageSizeByWindowWdth(windowWidth),
    [windowWidth]
  );

  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => () => setPage(page);

  const paginatedData = useMemo(() => {
    if (!pageSize) return [];
    const firstPageIndex = (page - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return showcase.slice(firstPageIndex, lastPageIndex);
  }, [page, pageSize]);

  return (
    <section className='mx-auto my-40 max-w-7xl'>
      <h4 className='font-bold text-4xl mb-3'>Showcase</h4>

      <div className='flex justify-between mb-16'>
        <p className='text-base text-[#ABABAB] font-normal max-w-lg'>
          Uh oh, we cannot find the page you are looking for. Try going to the
          previous page or homepage or Help Center for more information.
        </p>

        <Pagination
          page={page}
          count={showcase.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-12'>
        {paginatedData.map((data, i) => (
          <ShowcaseCard key={i} {...data} />
        ))}
      </div>
    </section>
  );
};
