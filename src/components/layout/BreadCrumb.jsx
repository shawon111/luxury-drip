import Link from "next/link";

const BreadCrumb = ({pageName}) => {
    return (
        <div className='py-[19px]'>
            <div className="max-w-full lg:max-w-[1170] mx-auto">
                <p>
                    <Link className='text-[14px] text-[#909090]' href="/">Home</Link> &gt; <span className='text-[14px] text-[#909090]'>{pageName}</span>
                </p>
            </div>
        </div>
    );
};

export default BreadCrumb;