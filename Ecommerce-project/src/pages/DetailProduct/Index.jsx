import React, { useContext, useEffect, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Content1 from '@/pages/DetailProduct/components/content1';
import Layout from '@components/Layout/Layout';
import SlideImage from '@components/SlideImage/SlideImage';
import Content2 from '@/pages/DetailProduct/components/Content2';
import { getProductDetail } from '@/apis/productsService';
import { getRelatedProduct } from '@/apis/productsService';
import Related from '@components/ProductRelated/Related';
import SliderCommon from '@components/SlideCommon/SliderCommon';

function Index() {
  const {
    container,
    functionBox,
    btnMark,
    content,
    parent,
    boximg,
    contentLine,
    line,
    textLine,
    boxRelated
  } = styles;
  const navigate = useNavigate();
  const { detailProduct, userId, handleListProduct, setIsOpen, setType } =
    useContext(SideBarContext);

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const fetchRelatedProduct = async (id) => {
    try {
      const data = await getRelatedProduct(id);
      setRelated(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchRelatedProduct(id);
    }
  }, [id]);
  console.log(related);
  useEffect(() => {
    if (!detailProduct) {
      setLoading(true);
      getProductDetail(id)
        .then((res) => {
          setProduct(res.data);
        })
        .catch(() => {
          console.error('Không tìm thấy sản phẩm');
        })
        .finally(() => setLoading(false));
    }
  }, [id, detailProduct]);

  const handeleBackPreviousPage = () => {
    navigate(-1);
  };

  // quyết định dùng data nào
  const data = detailProduct || product;

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Không có dữ liệu sản phẩm</div>;

  return (
    <>
      <Header />
      <Layout>
        <div className={container}>
          <div className={functionBox}>
            <div>Home &gt; Men</div>
            <div className={btnMark} onClick={handeleBackPreviousPage}>
              &lt; Return to previous Page
            </div>
          </div>
          <div className={parent}>
            <div className={boximg}>
              <SlideImage data={data.images} />
            </div>
            <div className={content}>
              <Content1
                data={data}
                userId={userId}
                listProductCart={handleListProduct}
                setIsOpen={setIsOpen}
                setType={setType}
              />
              <div className={contentLine}>
                <div className={line}></div>
                <div className={textLine}>OR</div>
                <div className={line}></div>
              </div>
              <Content2
                data={data}
                userId={userId}
                listProductCart={handleListProduct}
                setIsOpen={setIsOpen}
                setType={setType}
              />
            </div>
          </div>
          <div className={boxRelated}>
            <h2>Related Product</h2>
            <SliderCommon data={related} showItem={4} isProductItem slideItem />
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default Index;
