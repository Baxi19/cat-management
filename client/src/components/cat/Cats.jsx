import React, { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatInfoActions } from "../../redux/catDuck";
import Grid from '@mui/material/Grid';
import CardCat from './CardCat';
const Cats = () => {
    const dispatch = useDispatch();
    const listCats = useSelector((store) => store.cat.array);
    const [cats, setCats] = useState(useSelector((store) => store.cat.array));
    const [search, setSearch] = useState("");
    const searchInput = useRef(null);

    const filter = useMemo(() => 
        listCats.filter((role) => {
            return role.name.toLowerCase().includes(search.toLowerCase());
        }),
        [listCats, search]
    );

    const getCatsInfo = () => {
        dispatch(getCatInfoActions());
        setCats(listCats);
    };

    useEffect( () => {
        setCats([]);
        async function fetchData() {
            await getCatsInfo();
        }
        fetchData();
    }, [cats]);
    return (
        <>
            <Grid
                container
                spacing={3}
            >
                <Grid 
                    container 
                    item xs 
                    spacing={1}
                    >
                    {filter && 
                        filter.map((item, i) => 
                        <CardCat key={i} item={item}/> 
                    )}
                </Grid>
            </Grid>
        </>
    )
}

export default Cats;
