import { getResourceIds, getResourceData } from '../../lib/resources';
import Layout from '../../components/layout';

export async function getStaticProps({ params }) {
  const itemData = await getResourceData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getResourceIds();
  // console.log(paths);
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
 
  return (
    <Layout page>
    <article className="card col-6">
      <div className="card-body">
          <h5 className="card-title">{itemData.data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.data.birthdate}</h6>
          <p className="card-text">{itemData.data.phone}</p>
          <a href={'mailto:' + itemData.data.email} className="card-link">{itemData.data.relate}</a>
          <h3>related:</h3>
          <a href={'/resources/' + itemData.data.relid} className="card-link">{itemData.data.relname}</a>
          
          
      </div>
    </article>
    
    </Layout>
  );
}