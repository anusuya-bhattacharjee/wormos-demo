import React from "react";

const Apps = () => {
  return (
    <div className="flex m-10 gap-2 pt-10">
      <div className="card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5347-github_102542.png"
            alt="Github"
            className="rounded-xl"
            width="90"
            height="90"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Open Source</h2>
          <p>Github Repo</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQDw8QEBIQExERDxYQEhASFRAQFRUXFhUVFRUYKCggGBomHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBAwUEAv/EAEUQAAIBAgMEBgYGBwYHAAAAAAABAgMRBAYhBRIxQVFSYXGBkQcTIjKhwSNCYnKx0RSSorLh4vAXM2STo8IWJDRDU2OC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANdetGEXObUYxTcm+CS4tgbAfFOopJOLTTV007po+wAAAAAAAAAAAAAAAfM5pJttJLVt8EBm58Va8IK85KK5uTSXmyHbdzsotwwqUmrp1JcL/AGVz7yF4zHVa0t6rUlN9r0XcuCAs7EZswMHZ11JrqQqTXmlb4mj/AI1wXXqf5cysABa1DNmBm7LEKLfXjOC85Kx16NeE1vQlGSfBxaafkUkb8HjatGW9SqSg/st28uYF03MkH2Fna7UMUrcEqkVp/wDS5d5NYVFJJppp6prg0B9gxc0YvHUqMd6rUjBLrNID0GLkL2vnqCvHDQc3153UfCPF+NiRZfVZ0IzxEnKpUvNppLcT92KXdbxuB0rgW7WAMkR9IWP3KEaMXrWd5fcj/G3kS4rLP2I3sW48qcIpd71f4gZynmaWGapVW5UZPxpPpXZ2eJZNGopJSi009U1qmikSR5WzNLCv1dS8qMn4030rpXYBZwNWHrxqRU4SUoy1TXNG0AAAAAAAAAAAPmc0k22klq2+S6Stc2ZlliJOlSbVGLa041WuLfYdrP8AtlwisNTftTW9Va5QvZR8dfIgAAAAAAAAAA7ew8zV8KtyNqkOUZ39l/ZfLuOIAJFjc5YuppGUaS/9a1/Wd2cGvXnN705SlLpk235s1nWy9sKpi52V400/pJ24LoXTID1ZO2K8RWVSa+ipNOV+Epcor4FoI59J4fCU1DehShHrSSb7X0s5dbN9FzVLDQniKknuxUfZjftk+QElB596r1af68vyAHoKnzg/+drfej+4i2Crc80d3GzfXjCXwt8gOAAAOxl/MFXCS09um/eg7+Lj0MsnZW1qWJhvUpX6yfvRfainjdg8VUozU6U3CS4Nfg1zQF1oEN2HnaMrQxSUJcN+K9l965Euo1YzipQkpRfBxaaYGwAAAAAPipNRTk+CTb7lqfZysz1dzCVpc/VteenzAq3auMdetOq378m12R4RXkeUAAAAAAAAAAAAB71tnEqCpxrSjBKyjD2V8DwH1Tg5NRim29IpcW+wDLcpy1cpyb01bbb4Fj5Qy7+jR9bVV601w/8AHHoXb0mrKeV1QSrV0nVfux4qn+bJWgAMgAQj0j4K6p10uF6c/HWPzJuePauBjiKM6MuE1ZPqy4xfg7AU0Ddi8NKlOVOatKDs/wCv64mkAAAB7dnbVr4d3o1JR6VxjLvizxACebLz3F2jiae6+tDVPvXFEpwO0qNdXpVYz7E9fIpozFtO6bT6Vo7gXgCpsFmfGUuFaU0uVT2/i9fidrDZ+qL+9oRl2wk18GBP7nDzp/0NXuh++jn0M94Z+/CrDwUjVtzM2Dr4WrSjUalKPspxavK90BX4AAAAAAAAAAAAAWB6PNn0/UyruCdRzlBSfKKUdF0cSvyzsgRtgovpnUf7TXyAkSMgAAAAPJh9o0akpU4VIucG1KN9U1x0PWVLmmDhjatm09/eTTaeqT4oCaZvy7+kx9bSX00F/mR6vf0FbVIOLaknFp2aaaafadfB5pxlLRVd9LlUSl8TRtfa7xLU50oRqLjOF05LtXMDmgAAAAAAAAAAAAAAAAAAAAAAAAAAWrkunu4Gl2qUvObZVRcew6Pq8NSg/q04J99tQPcAAAAAFd+kPBONaNZLSpHdf3o/wZYhy8x7LWJw8qaspe9Tb5TXD8vECogfU4uLaaaabTT4prkfIAAAAAAAAAAAAAAAAAAAAAAAAAAAejZ9D1lWFNfXnGPg3qXPCNlboVissh4T1mLUuVKLm+96RXxLOQGQAAAAAwzIAg2dsuNt4mgrvjViv318yDl4SRD8yZOVRurhbRm7uUOEZPpj0MCvwbcThp05blSEoSXFSVjUAAAAAAAAAAAAAAAAAAAAAAADdgsM6tSNOPGclFeP9MCwPR5gNzDyqta1pafcjovi5ErNGDw6pQjTjpGEVFeBvAAAAAAAAAwyO7UzbSw9WVGrSq3jazW600+D4kjZDvSDsjfprEwV5U/ZqW5w5Pw+YGrHZvwVaO7Vw1SovtRh+N7oiW0quGk74enVprnvzjJeGl/ieEAAAAAAAAAAAAAAAAAAAAAAAmfo72VecsTJaQvCn95+9L5eJE8DhZVqkaUFeU3ZfN+Cuy39mYONClClBaQVu982B6jIAAAAAAAAAA+akFJNSSaaaafNdB9CwFWZr2A8LPfgr0Zv2X1H1WcEuzEUI1IuE4qUZKzT1uiv8wZNqU7zwydSHFw+tHu6UBEwZlFp2aaa4pqzXeuRgAAAAAAAAAAAAAAAAAASfJmX/XzVarH6Gm7pP/uSXyQHdyLsT1UP0iorVKitC/1Kf5sllgkZAAAAAAAAAAAAAABixkAc/aWx8PiP72lGT5S4SXiiO4vIdF3dOtOHO0rSS8Tu7X29h8MvpKntcVCHtSfhy72QLbmaq2JvGP0VLqxesu+QHM2rg4UajpwrwrW95wWifRc8YAAAAAAAAAAAAADvZay3UxUlOacKKesuc+yP5gfGWdgSxc7u8aMWt+XW+zHt/AtHD0IU4KEEoxikopckYwmGhSgoU4qMYqySNwAAAAAAAAAAAfPrI9ZeaMetj1l5o4m3Ms0sTeSbpVOtHg39qPMgm1sv4rDN78XOHKVNuUbdvNeQFqSxEFxnFd8kc/FZhwdP3sRT05Re+/KNyo35gCwcbnyjHSjSqVH0ytCP5/gRvaWbMVWulP1cXyp6adsuJwgBlu7u3e/G/MwAAAAAAAAAAAAAzCLbSSbb0SV3fw5nZ2PlnEYnVR9XDrzTWnYuLJ7sTLlDCq8Y79TnOdr+HQgI5lzJrlapi1ZcY0+b6N/o7idUqailGKSS0SSskuxH0jIAAAAAAAAAAAAAAMNGQBwdrZUw1e8t31U+tTste2PBkT2jknE09abjXX2fZl+q/kyyjFgKVxOEqUnapTnB/ai18TSXdUpRkrSipLtSZysVljB1NZUIp9MLwf7NgKmBY1bIWGfu1K0PGEl8Vf4njl6PlyxTS7aSf+4CCgnP9nv+L/0f5h/Z7/i/9H+YCDAncPR9H62Kk12U0vxbPbQyJhI+9KtPvlFL9lICtz0YXA1artSpzn92La8y1MLlzCU9YUIXXOS335yudOFNLRJLuVgK52fkfEVNaso0Y9vty8EtPiSzZeVcNQs9z1k+tU1d+xcEdsyBhIyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z"
            alt="Twitter"
            className="rounded-xl"
            width="90"
            height="90"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Follow Us on Twitter</h2>
          <p className="text-gray-400">Latest news and updates</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src="data:image/png;base64,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"
            alt="IOS"
            className="rounded-xl"
            width="90"
            height="90"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Visit App Store</h2>
          <p className="text-gray-400">Download for IOS Devices</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src="data:image/png;base64,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"
            alt="Telegram"
            className="rounded-xl"
            width="90"
            height="90"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Telegram Channel</h2>
          <p className="text-gray-400">Join the Community</p>
        </div>
      </div>
    </div>
  );
};

export default Apps;
