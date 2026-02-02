import MuiPagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/slices/filterSlice';

function Pagination() {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.filter.currentPage);
    const totalPages = useSelector(state => state.filter.totalPages); // example

    const onChangePage = (event,page) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <MuiPagination
            page={currentPage}
            count={totalPages}         
            size='large'
            onChange={onChangePage}     
            sx={{
                '& .MuiPaginationItem-root': {
                    color: '#f97316',
                    border: '1px solid #f97316',
                    borderColor: '#f97316',
                    
                    '&:hover': {
                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                    },
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                    backgroundColor: '#f97316',

                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#ea580c',
                    },
                },
                '& .MuiPaginationItem-icon': {
                },
            }}
        />
    );
}

export default Pagination;
