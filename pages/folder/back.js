import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import { StyledEngineProvider } from '@mui/material/styles';

/* Icon */
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FolderIcon from '@mui/icons-material/Folder';
import CodeIcon from '@mui/icons-material/Code';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CssIcon from '@mui/icons-material/Css';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

/* Snb */
import { SnbForFolder } from '../../components/layout/Snb';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: '20px',
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color='inherit' sx={{ mr: 1 }} />
          <Typography
            variant='body2'
            sx={{ fontWeight: 'inherit', flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          <Typography variant='caption' color='inherit'>
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};
export default function back() {
  return (
    <>
      <SnbForFolder />
      <div className='folder'>
        <Head>
          <title>KPP BACKEND GUIDE - 폴더 구조</title>
        </Head>
        <section className='page-title'>
          <h3>기본 폴더</h3>
          <p>
            - Nest JS Back End Project 의 각 디렉토리 역할에 대한 구조 및 설명
          </p>
        </section>

        <StyledEngineProvider injectFirst>
          <TreeView
            aria-label='folder-structure'
            defaultExpanded={['1']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            sx={{ height: 900, flexGrow: 1, maxWidth: 900, overflowY: 'auto' }}
          >
            <StyledTreeItem
              nodeId='1'
              labelText='Components - 재사용이 가능한 컴포넌트 혹은 유틸 함수'
              labelIcon={FolderSpecialIcon}
            >
              <StyledTreeItem
                nodeId='5'
                labelText='Layout - 페이지 레이아웃과 관련이 있는 컴포넌트'
                labelIcon={FolderIcon}
              />

              <StyledTreeItem
                nodeId='6'
                labelText='Schema - 유효성 검사와 관련 있는 컴포넌트'
                labelIcon={FolderIcon}
              />

              <StyledTreeItem
                nodeId='7'
                labelText='UI - 실제 화면에 사용되는 UI 와 관련 있는 컴포넌트 그룹'
                labelIcon={CreateNewFolderIcon}
              >
                <StyledTreeItem
                  nodeId='9'
                  labelText='Atoms : 원자 - 가장 작은 단위의 UI 컴포넌트'
                  labelIcon={FolderIcon}
                />
                <StyledTreeItem
                  nodeId='10'
                  labelText='Molecules : 분자 - Atom 컴포넌트가 2개 이상 묶여있는 UI 컴포넌트'
                  labelIcon={FolderIcon}
                />
                <StyledTreeItem
                  nodeId='11'
                  labelText='Organisms : 유기체 - Molecules 컴포넌트가 2개 이상 존재하며, 그 자체로 화면 내의 그룹 하나를 온전히 담당 할 수 있는 UI 컴포넌트'
                  labelIcon={FolderIcon}
                />
                <StyledTreeItem
                  nodeId='12'
                  labelText='templates : 템플릿 - 화면 내의 기능 하나 이상을 온전히 담당 할 수 있는 UI 컴포넌트'
                  labelIcon={FolderIcon}
                />
              </StyledTreeItem>

              <StyledTreeItem
                nodeId='8'
                labelText='Utils - 재사용이 가능한, 특정 기능을 담당하는 함수 그룹'
                labelIcon={CreateNewFolderIcon}
              >
                <StyledTreeItem
                  nodeId='13'
                  labelText='CustomAxios - Axios 라이브러리의 HOC로, 호출시 반복되는 설정과 예외 처리 부분을 공통처리 할 수 있음'
                  labelIcon={CodeIcon}
                />
                <StyledTreeItem
                  nodeId='14'
                  labelText='makeDT - Tabulator 라이브러리의 HOC로, 렌더링 될 데이터 테이블 객체를 반환하는 함수'
                  labelIcon={CodeIcon}
                />
                <StyledTreeItem
                  nodeId='15'
                  labelText='reCallAccessToken - JWT Token 을 재발행하는 로직'
                  labelIcon={CodeIcon}
                />
                <StyledTreeItem
                  nodeId='16'
                  labelText='PostCode - 우편번호 찾기 UI 팝업을 호출하고 선택된 주소와 우편번호를 반환하는 함수'
                  labelIcon={CodeIcon}
                />
                <StyledTreeItem
                  nodeId='17'
                  labelText='reCallAccessToken - JWT Token 을 재발행하는 로직'
                  labelIcon={CodeIcon}
                />
                <StyledTreeItem
                  nodeId='18'
                  labelText='manipulateData - 객체검사, 문자열 조작, 계산 등의 유틸 데이터 조작 관련 함수 모음'
                  labelIcon={CodeIcon}
                />
              </StyledTreeItem>
            </StyledTreeItem>

            <StyledTreeItem
              nodeId='2'
              labelText='Pages - URL과 매칭이 되는 실제 페이지 관련 디렉토리'
              labelIcon={FolderSpecialIcon}
            >
              <StyledTreeItem
                nodeId='27'
                labelText='index.js - 시작이 되는 페이지 '
                labelIcon={CodeIcon}
              />
              <StyledTreeItem
                nodeId='28'
                labelText='_document.js - <html> 태그를 포함하는 페이지를 리턴하는 고차 함수'
                labelIcon={CodeIcon}
              />
              <StyledTreeItem
                nodeId='29'
                labelText='_app.js - <body> 태그를 이하의 페이지를 리턴하는 고차 함수이며, 상태 관리가 시작되는 최상단 문서'
                labelIcon={CodeIcon}
              />
              <StyledTreeItem
                nodeId='30'
                labelText='main - 메인 페이지 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='31'
                labelText='menu - GNB 메뉴 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='32'
                labelText='monitoring - 모니터링 페이지 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='33'
                labelText='care - 발전소 케어 페이지 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='34'
                labelText='service - KPP 서비스 페이지 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='35'
                labelText='membership - 멤버십 페이지 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='36'
                labelText='subscribe - 구독 페이지 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='37'
                labelText='settings - 세팅 페이지 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='38'
                labelText='signin - 로그인 페이지 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='39'
                labelText='signup - 회원가입 페이지 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='40'
                labelText='terms - 약관 페이지 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='41'
                labelText='intro - 온보딩 인트로 페이지 관련 디렉토리'
                labelIcon={CreateNewFolderIcon}
              />
              <StyledTreeItem
                nodeId='42'
                labelText='api - API 호출과 관련된 디렉토리 (현재 사용 안 함)'
                labelIcon={CreateNewFolderIcon}
              />
            </StyledTreeItem>

            <StyledTreeItem
              nodeId='43'
              labelText='Store - REDUX 관련 디렉토리'
              labelIcon={FolderSpecialIcon}
            >
              <StyledTreeItem
                nodeId='44'
                labelText='store.js - Redux 최상단 &amp; 상태 관리를 위한 Store 생성 함수'
                labelIcon={CodeIcon}
              />
              <StyledTreeItem
                nodeId='45'
                labelText='rootReducer.js - 최상단 리듀서 설정 함수'
                labelIcon={CodeIcon}
              />
              <StyledTreeItem
                nodeId='46'
                labelText='reducers - 리듀서 관련 디렉토리'
                labelIcon={FolderIcon}
              >
                <StyledTreeItem
                  nodeId='47'
                  labelText='authSlice.js - 권한 관리 상태 그룹'
                  labelIcon={CodeIcon}
                />
                <StyledTreeItem
                  nodeId='48'
                  labelText='loadingSlice.js - 로딩과 관련된 상태 그룹'
                  labelIcon={CodeIcon}
                />
                <StyledTreeItem
                  nodeId='49'
                  labelText='mainSlice.js - 메인 페이지와 관련된 상태 그룹 (정리 필요)'
                  labelIcon={CodeIcon}
                />
                <StyledTreeItem
                  nodeId='50'
                  labelText='monitoringSlice.js - 모니터링 관련 상태 그룹'
                  labelIcon={CodeIcon}
                />
                <StyledTreeItem
                  nodeId='51'
                  labelText='pageSlice.js - 페이지 이동 관련 상태 그룹'
                  labelIcon={CodeIcon}
                />
                <StyledTreeItem
                  nodeId='52'
                  labelText='plantSlice.js - 내 발전소 정보 관련 상태 그룹'
                  labelIcon={CodeIcon}
                />
                <StyledTreeItem
                  nodeId='53'
                  labelText='tokenSlice.js - 토큰 관련 상태 그룹'
                  labelIcon={CodeIcon}
                />
              </StyledTreeItem>
            </StyledTreeItem>

            <StyledTreeItem
              nodeId='3'
              labelText='Public - 리소스 관련 오픈 디렉토리'
              labelIcon={FolderSpecialIcon}
            >
              <StyledTreeItem
                nodeId='19'
                labelText='font - 웹 폰트'
                labelIcon={FontDownloadOutlinedIcon}
              />
              <StyledTreeItem
                nodeId='20'
                labelText='img - 이미지'
                labelIcon={ImageOutlinedIcon}
              />
            </StyledTreeItem>

            <StyledTreeItem
              nodeId='4'
              labelText='Styles'
              labelIcon={FolderSpecialIcon}
            >
              <StyledTreeItem
                nodeId='22'
                labelText='reset'
                labelIcon={CssIcon}
              />
              <StyledTreeItem
                nodeId='23'
                labelText='resource - 자주 사용되는 폰트, 색상, 기본 틀을 이루는 요소 들에 대한 정의'
                labelIcon={CssIcon}
              />
              <StyledTreeItem
                nodeId='24'
                labelText='components - 재사용되는 컴포넌트들에 대한 정의'
                labelIcon={CssIcon}
              />
              <StyledTreeItem
                nodeId='25'
                labelText='globals - 전역으로 쓰일, 모든 페이지에 대한 스타일 정의'
                labelIcon={CssIcon}
              />
              <StyledTreeItem
                nodeId='26'
                labelText='responsive - 기기별 사이즈에 대한 대응을 정의'
                labelIcon={CssIcon}
              />
            </StyledTreeItem>
          </TreeView>
        </StyledEngineProvider>
      </div>
    </>
  );
}
