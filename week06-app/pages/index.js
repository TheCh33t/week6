import { getSortedList } from '../lib/resources';
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout';



export async function getStaticProps() { 
const allData = await getSortedList();

return {

   props: {
      allData
    }
}

}

export default function Home({ allData }) {


return(
  <div>
  <div className="list-group">
  <h1>People:</h1>
          {allData.map(({ id, data }) => (
            
            <Link key={id} href={`/resources/${id}`}>
              <a className="list-group-item list-group-item-action">{data.name}</a>
            </Link>
          ))}
        </div>



    
      

  
</div>
);
}