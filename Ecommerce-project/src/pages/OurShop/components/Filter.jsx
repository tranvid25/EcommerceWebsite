import React, { useContext } from 'react';
import { TfiLayoutGrid3 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from './styles.module.scss';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import { OurShopContext } from '@/contexts/OurShopProvider';
function Filter() {
  const { containerFilter, icon, show, content } = styles;
  const { showOptions, sortOptions,setSortId,setShowId,setIsShowGrid,isShowGrid } = useContext(OurShopContext);
  const getValueSelect = (value,type) => {
    console.log(value);
    if(type === 'sort'){
        setSortId(value);
    }else{
        setShowId(value);
    }
  };
  const handleGetShowGrid=(type)=>{
    if(type === 'grid'){
        setIsShowGrid(true);
    }else{
        setIsShowGrid(false);
    }
  }
  return (
    <div className={content}>
      <div className={containerFilter}>
        <SelectBox options={sortOptions} getValue={getValueSelect} type="sort" />
        <div className={icon}>
          <TfiLayoutGrid3 style={{ fontSize: '20px', cursor: 'pointer' }} onClick={()=>handleGetShowGrid('grid')} />
          <div
            style={{ height: '20px', width: '1px', backgroundColor: 'gray' }}
          ></div>
          <CiCircleList style={{ fontSize: '20px', cursor: 'pointer' }} onClick={()=>handleGetShowGrid('list')} />
        </div>
      </div>
      <div className={show}>
        <span>Show</span>
        <SelectBox options={showOptions} getValue={getValueSelect} type="show" />
      </div>
    </div>
  );
}

export default Filter;
