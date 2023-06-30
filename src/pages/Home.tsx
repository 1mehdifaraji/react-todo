import { FC, useState } from "react";
import axios from "axios";

import { Layout, Loading, Task } from "components";

const Homepage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = (id: string): void => {
    setLoading(true);
    axios
      .delete(`/tasks/${id}`)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  return (
    <Layout title="Home">
      {loading ? (
        <Loading />
      ) : (
        Array.from(Array(10).keys()).map((each, index) => {
          return (
            <Task
              onDelete={(id: string) => handleDelete(id)}
              index={index}
              desc="asd asdasjdn asjkdbaksjdas hkjdh askjdh dkjashd sakjdh akjdashdkjash dasjkdhaskjd haskjd haskd gweyifg webirfyvbaerwofabwerfov rbof wefoyw efiuywqb fiuewrhfberauicvaerukhcbv aerub cvehjrb cvarweuhb cvauwh"
              status={false}
              id="123"
              title="asoudnaskjd bnaskhjdbashjkdbqeiyufhb wreiuyfb wkfbareifkjhaerb gjlehr bvofvwirfyvberuhvb erwkuwjfbwklfbwefغهقثزبعشثقههغز بشقصغبزصثهبخزص قثعغبزاز یسنبتزیسنبتایس بتلانشثق بنشثقبل شثتمقا لدثعقد شثقعد شثقد صثقد شصث بزصثزب صثزبعبزسیتبازسیبزسیتبنلندس یتباسیبسیدزبهعصغقبصهثذ "
            />
          );
        })
      )}
    </Layout>
  );
};

export default Homepage;
