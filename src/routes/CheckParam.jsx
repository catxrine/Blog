import PageNotFound from "../pages/UtilPages/PageNotFound";

export default function CheckParam({ data, param, children }) {
  return data.includes(param) ? children : <PageNotFound />;
}
