import React  from 'react';
import NavigateNext from '@material-ui/icons/NavigateNext';

/* Redux */
import { useSelector, useDispatch } from 'react-redux';


export function HeaderBreadScrumb(props) {
  
    const className = props.className

    /* Redux */
    /* 1. 리덕스 상태 선언 */
    const { nowPageTitle } = useSelector(state => ({
        nowPageTitle: state.pageSlice.nowPageTitle,
    }))


    return(<h2 className={`bread-scrumb ${className ? className : ""}`}>{nowPageTitle}</h2>)
}


export function BreadScrumb(props) {

    //@ 페이지 경로 : []
    //  - 현재위치를 string 배열로 받음
    const pageRouteInfo = props.pageRouteInfo

    //@ 아이콘 이름 : string
    const iconName = props.iconName
   
    const className = props.className
    return (
        <>
            <h2 className={`bread-scrumb ${className ? className : ""}`}>
                { iconName ? 
                    <Icon name={iconName ? iconName : "bell"} inverted color="green" />
                    : 
                    ""
                }
                {pageRouteInfo ?
                    pageRouteInfo.map((item, index)=>{
                        if(index !== pageRouteInfo.length-1){
                            return (
                                <div key={item}>
                                    <span>{item}</span>
                                    <NavigateNext fontSize="small" />
                                </div>
                            )
                        }else{
                            return (<span key={item}>{item}</span>)
                        }
                    })
                    :   
                    (<span>현재위치 경로 표기</span>)
                }
            </h2>
        </>    
    );
}
