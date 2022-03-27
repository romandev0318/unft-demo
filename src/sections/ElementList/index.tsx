import { useMemo, useState } from "react";
import { Pagination } from "@/components/Pagination";
import { useWindowWidth } from "@/utils/useWindowSize";
import { elementsByType } from "@/data/elements";
import { getPageSizeByWindowWdth } from "@/utils/getPageSizeByWindowWdth";
import { ElementCard } from "@/components/ElementCard";
import { ElementType, rarities, RarityType } from "types";
import { camelCaseToTitleCase } from "@/utils/camelCaseToTitleCase";
import { SelectMenu } from "@/components/SelectMenu";

export const ElementList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [selectedType, setSelectedType] = useState(
    Object.keys(elementsByType)[0] as ElementType
  );
  const [selectedRarity, setSelectedRarity] = useState<RarityType | null>(null);

  const handlePageChange = (page: number) => () => setPage(page);
  const handleTypeChange = (type: ElementType) => () => {
    setPage(1);
    setSelectedType(type);
  };
  const handleRarityChange = (rarity: RarityType | null) => () => {
    setPage(1);
    setSelectedRarity(rarity);
  };

  const paginatedData = useMemo(() => {
    const firstPageIndex = (page - 1) * 6;
    const lastPageIndex = firstPageIndex + 6;
    return elementsByType[selectedType]
      .filter((element) =>
        selectedRarity ? element.rarity === selectedRarity : true
      )
      .slice(firstPageIndex, lastPageIndex);
  }, [selectedType, selectedRarity, page]);

  return (
    <section
      id='showcase'
      className='mx-6 xl:mx-auto mt-24 md:mt-40 mb-40 max-w-7xl'
    >
      <div className='flex flex-col xl:flex-row space-x-0 xl:space-x-20'>
        <div className='hidden flex-col space-y-12 mt-40 xl:flex'>
          <div className='flex flex-col space-y-3'>
            <span className='font-bold text-xs text-[#A1A1A1] uppercase'>
              Sort Rarity
            </span>

            <SelectMenu
              value={selectedRarity}
              options={[null, ...rarities]}
              onChange={handleRarityChange}
            />
          </div>

          <div className='flex flex-col space-y-6'>
            <span className='font-bold text-xs text-[#A1A1A1] uppercase'>
              Type of ellements
            </span>

            <div className='flex flex-col space-y-2'>
              {Object.keys(elementsByType).map((type, i) => (
                <div
                  key={i}
                  className={`py-4 px-3 font-bold text-base leading-3 rounded-lg cursor-pointer hover:bg-[#322A18] hover:text-[#F8D47A] transition ease-out delay-200 ${
                    selectedType === type ? " bg-[#322A18] text-[#F8D47A]" : ""
                  }`}
                  onClick={handleTypeChange(type as ElementType)}
                >
                  {camelCaseToTitleCase(type)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full'>
          <strong className='block font-bold text-4xl mb-6 xl:hidden'>
            {camelCaseToTitleCase(selectedType)}
          </strong>

          <div className='flex flex-col sm:flex-row items-center justify-between mb-12 space-y-8 md:space-y-0'>
            <strong className='hidden font-bold text-4xl xl:block'>
              {camelCaseToTitleCase(selectedType)}
            </strong>

            <div className='flex flex-col w-full sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-8 mt-40 xl:hidden'>
              <div className='flex flex-col space-y-3'>
                <span className='font-bold text-xs text-[#A1A1A1] uppercase'>
                  Sort Rarity
                </span>

                <SelectMenu
                  value={selectedRarity}
                  options={[null, ...rarities]}
                  onChange={handleRarityChange}
                />
              </div>

              <div className='flex flex-col space-y-3'>
                <span className='font-bold text-xs text-[#A1A1A1] uppercase'>
                  Type of ellements
                </span>

                <SelectMenu
                  value={selectedType}
                  options={Object.keys(elementsByType)}
                  onChange={handleTypeChange}
                />
              </div>
            </div>

            <Pagination
              page={page}
              count={
                elementsByType[selectedType].filter((element) =>
                  selectedRarity ? element.rarity === selectedRarity : true
                ).length
              }
              pageSize={6}
              onPageChange={handlePageChange}
            />
          </div>

          <div className='grid place-items-center grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 sm:gap-x-6 sm:gap-y-12'>
            {paginatedData.map((data, i) => (
              <ElementCard key={i} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
