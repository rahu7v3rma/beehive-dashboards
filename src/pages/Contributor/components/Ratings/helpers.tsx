export const MakeHalfStarsSemiTransparent = () => {
    const ratingElements = document.querySelectorAll('.MuiRating-root');
    if (ratingElements.length > 0) {
        ratingElements.forEach((ratingElement) => {
            ratingElement.childNodes.forEach((re) => {
                if ((re.childNodes[0] as HTMLElement).style.width === '50%') {
                    (re as HTMLElement).style.opacity = '0.5';
                }
            });
        });
    }
};
