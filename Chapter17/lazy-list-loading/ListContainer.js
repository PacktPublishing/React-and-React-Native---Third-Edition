import React, { useState, useEffect } from "react";
import * as api from "./api";
import List from "./List";

export default function ListContainer() {
  function fetchItems() {
    return api
      .fetchItems()
      .then(resp => resp.json())
      .then(({ items }) => {
        setData(
          items.map((value, i) => ({
            key: i.toString(),
            value
          }))
        );
      });
  }

  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  return <List data={data} fetchItems={fetchItems} />;
}
