const cloudName = 'dlwwn5mfl';

export const fileUpload = async (file) => {
    if (!file) return null;

    const cloudUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (!resp.ok) throw new Error('Failed to upload');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;
    } catch (error) {
        // console.log(error);
        // throw new Error(error.message());
        return null;
    }
}