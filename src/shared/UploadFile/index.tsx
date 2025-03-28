import { FunctionComponent, useEffect, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import theme from 'src/theme';

import {
    CloseBtn,
    Container,
    DocItem,
    ProgContainer,
    Progressbar,
    Progressdiv,
    selectfileSize,
    selectFileText,
    UploadBtn,
    UploadDoc,
    UploadFileSystem,
    uploadText,
    uploadTextContainer,
    uploadType
} from './styled';

import { ReactComponent as UploadIcon } from './../../assets/icons/upload.svg';
import { ReactComponent as CloseIcon } from './../../assets/icons/close.svg';
import Label from '../Label';

export interface Props {
    onFileUpload?: (file: File) => void;
}

export type ProgressWidth = {
    width: number;
};

const UploadFile: FunctionComponent<Props> = ({ onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [progressWidth, setProgressWidth] = useState<number>(0);

    const handleChange = (file: File) => {
        setSelectedFile(file);
        onFileUpload && onFileUpload(file);
    };

    useEffect(() => {
        if (selectedFile) {
            let progress = 0;
            const intervalRef = setInterval(() => {
                if (progress < 100) {
                    progress = progress + 10;
                    setProgressWidth(progress);
                } else {
                    clearInterval(intervalRef);
                }
            }, 100);
        }
    }, [selectedFile]);

    return (
        <Container>
            <UploadDoc>
                <FileUploader
                    handleChange={handleChange}
                    name="file"
                    multiple={false}
                    fileOrFiles={selectedFile}
                    types={['JPG', 'JPEG', 'PNG', 'GIF', 'SVG']}
                    maxSize={3}
                    classes={'file-uploader'}
                    children={
                        <UploadFileSystem>
                            <UploadIcon />
                            <Label
                                sxOverrides={uploadTextContainer}
                                color={theme.color.white}
                                fontSize="16px"
                                fontFamily="Inter"
                            >
                                <Label
                                    sxOverrides={uploadText}
                                    color={theme.color.lightningYellow}
                                    fontSize="16px"
                                    fontFamily="Inter"
                                >
                                    Click to upload
                                </Label>{' '}
                                or drag and drop
                            </Label>
                            <Label
                                fontSize="12px"
                                color={theme.color.white70}
                                sxOverrides={uploadType}
                            >
                                SVG, PNG, JPG or GIF (max. 3MB)
                            </Label>
                        </UploadFileSystem>
                    }
                />
            </UploadDoc>

            {selectedFile && (
                <ProgContainer>
                    <UploadBtn>
                        <UploadIcon />
                    </UploadBtn>
                    <DocItem>
                        <Label
                            sxOverrides={selectFileText}
                            color={theme.color.vistaWhite}
                            fontSize="16px"
                            fontFamily="Inter"
                        >
                            {selectedFile?.name}
                        </Label>
                        <Label
                            sxOverrides={selectfileSize}
                            fontSize="12px"
                            fontFamily="Inter"
                            color={theme.color.white50}
                        >
                            {(selectedFile?.size / 1024).toFixed(1)}kb&nbsp;
                            &#x2022; &nbsp;Complete
                        </Label>
                        <Progressdiv>
                            <Progressbar width={progressWidth} />
                        </Progressdiv>
                    </DocItem>
                    <CloseBtn>
                        <CloseIcon
                            onClick={() => {
                                setSelectedFile(null);
                                setProgressWidth(0);
                            }}
                        />
                    </CloseBtn>
                </ProgContainer>
            )}
        </Container>
    );
};

export default UploadFile;
