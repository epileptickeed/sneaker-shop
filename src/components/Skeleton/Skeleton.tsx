import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => {
  return (
    <div className="skeleton">
      <ContentLoader
        speed={2}
        width={150}
        height={210}
        viewBox="0 0 150 210"
        backgroundColor="#fafafa"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="0" rx="16" ry="16" width="150" height="90" />
        <rect x="0" y="100" rx="10" ry="10" width="149" height="24" />
        <rect x="0" y="133" rx="10" ry="10" width="108" height="15" />
        <rect x="0" y="170" rx="10" ry="10" width="83" height="22" />
        <rect x="111" y="168" rx="10" ry="10" width="33" height="22" />
      </ContentLoader>
    </div>
  );
};

export default Skeleton;
