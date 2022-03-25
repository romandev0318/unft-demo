import { useMemo, useState } from "react";
import { Pagination } from "@/components/Pagination";
import { ShowcaseCard } from "@/components/ShowcaseCard";
import { useWindowWidth } from "@/utils/useWindowSize";
import { showcase } from "@/data/nfts";

const getPageSizeByWindowWdth = (windowWidth: undefined | number) => {
  if (!windowWidth) return 0;

  if (windowWidth < 640) return 3;

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
    <section
      id='showcase'
      className='mx-6 2xl:mx-auto pt-24 md:pt-40 pb-20 max-w-7xl'
    >
      <div className='flex flex-col sm:flex-row items-center justify-between mb-16 space-y-8 sm:space-y-0'>
        <h4 className='font-bold text-4xl'>Showcase</h4>

        <Pagination
          page={page}
          count={showcase.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>

      <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-12'>
        {paginatedData.map((data, i) => (
          <ShowcaseCard key={i} {...data} />
        ))}
      </div>
    </section>
  );
};
