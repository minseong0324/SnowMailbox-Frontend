import React, { useCallback, useState } from 'react'
import * as S from './style';
import PageLayout from '@/components/PageLayout/PageLayout';
import RudolfButton from '@/components/Button/RudolfButton/RudolfButton';
import { useRecoilValue } from 'recoil';
import { HomeDataAtom } from '@/atoms/HomeAtom';
import OrnamentLayer from '@/components/OrnamentLayer/OrnamentLayer'; //TODO: 오너먼트레이어 이미지 다 나오면 구현해야함.
import LongButton from '@/components/Button/LongButton/LongButton';
import ShareModal from '@/components/Modal/ShareModal/ShareModal';
import SkinModal from '@/components/Modal/SkinModal/SkinModal';
export default function Home() {
    const homeData = useRecoilValue(HomeDataAtom);
    const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);
    const handleShare = () => setShareModalOpen(true);
    const [skinModalOpen, setSkinModalOpen] = useState<boolean>(false);
    const handleSkin = () => setSkinModalOpen(true);

    const closeShareModal = useCallback(
        () => setShareModalOpen(false),
        [setShareModalOpen],
    );

    const closeSkinModal = useCallback(
        () => setSkinModalOpen(false),
        [setSkinModalOpen],
      );
    return (
        <>
            <PageLayout>
                <S.ObjectWrapper>
                    <S.OrnamentLayerWrapper>
                        <S.TreeImage treeType={homeData.treeType} />
                    </S.OrnamentLayerWrapper>
                    <S.RudolfButtonWrapper>
                            <RudolfButton onClick={handleSkin}/>
                    </S.RudolfButtonWrapper>
                    <S.SpeechBubble />
                </S.ObjectWrapper>
                <LongButton margin="52px 0 0 0" onClick={handleShare}>
                    <S.ButtonText>{'편지 확인하기'}</S.ButtonText>
                </LongButton>
                <LongButton margin="12px 0 0 0">
                    <S.ButtonText>{'링크 공유하기'}</S.ButtonText>
                </LongButton>
            </PageLayout>

            {/* 공유하기 모달 */}
            <ShareModal closeModal={closeShareModal} isOpen={shareModalOpen} />
            {/* 스킨 선택 모달 */}
            <SkinModal closeModal={closeSkinModal} isOpen={skinModalOpen} />
        </>
    ) 
}