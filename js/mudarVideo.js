function changeVideoLink(src) {
    const projetos = document.querySelectorAll('.projeto-container');

    // Obtenha o elemento do vídeo
    const videoDiv = document.querySelector('.video');

    const newVideo = document.createElement('iframe');
    newVideo.setAttribute('width', '750');
    newVideo.setAttribute('height', '445');
    newVideo.setAttribute('src', src);
    newVideo.setAttribute('title', 'YouTube video player');
    newVideo.setAttribute('frameborder', '0');
    newVideo.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    newVideo.setAttribute('allowfullscreen', '');

    // Remova o vídeo atual e adicione o novo vídeo ao div
    videoDiv.innerHTML = '';
    videoDiv.appendChild(newVideo);
}