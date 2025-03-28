import { SearchInput, searchInputStyles, StyledSearchIcon } from './styled';

export interface SearchInputWrapperProps {
    search: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInputWrapper = ({
    search,
    handleSearch
}: SearchInputWrapperProps) => {
    return (
        <SearchInput
            label="Search"
            InputProps={{
                endAdornment: <StyledSearchIcon />,
                sx: searchInputStyles.searchInputSX
            }}
            InputLabelProps={{
                sx: searchInputStyles.searchLabelSX
            }}
            variant="standard"
            value={search}
            onChange={handleSearch}
        />
    );
};

export default SearchInputWrapper;
