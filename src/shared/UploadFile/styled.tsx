import { styled } from '@mui/system';
import theme from 'src/theme';
import { ProgressWidth } from '.';

export const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: theme.color.darkBlue,
    borderRadius: '4px'
});

export const UploadFileSystem = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '24px',
    paddingBottom: '24px'
});

export const UploadDoc = styled('div')({
    width: '95%',
    height: 'auto',
    border: '1px dashed #363842',
    borderRadius: '4px',
    marginTop: '24px',
    marginBottom: '24px',
    '.file-uploader': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100% !important',
        height: '100%',
        cursor: 'pointer'
    }
});

export const ProgContainer = styled('div')({
    display: 'flex',
    gap: '10px',
    width: '100%',
    height: 'auto',
    paddingBottom: '24px'
});

export const DocItem = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flex: 1
});

export const CloseBtn = styled('div')({
    marginTop: '16px',
    marginRight: '40px',
    marginLeft: '20px'
});

export const UploadBtn = styled('div')({
    marginLeft: '32px',
    marginRight: '8px'
});

export const Progressdiv = styled('div')({
    width: '100%',
    height: '4px',
    backgroundColor: theme.color.progressBarTrack,
    marginTop: '16px'
});

export const Progressbar = styled('div')(({ width }: ProgressWidth) => ({
    height: '100%',
    backgroundColor: theme.color.progressBarFill,
    width: width + '%'
}));

export const uploadTextContainer = {
    paddingTop: '20px',
    paddingBottom: '10px',
    cursor: 'pointer'
};

export const uploadText = {
    textDecoration: 'underline',
    cursor: 'pointer'
};

export const uploadType = {
    textDecoration: 'underline',
    cursor: 'pointer'
};

export const selectFileText = {
    paddingBottom: '5px'
};
export const selectfileSize = {
    paddingTop: '1px'
};
